#####################################
##               Build             ##
#####################################
FROM node:lts-alpine as build

# get the node environment to use
ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV:-production}

# some projects will fail without this variable set to true
ARG SKIP_PREFLIGHT_CHECK
ENV SKIP_PREFLIGHT_CHECK ${SKIP_PREFLIGHT_CHECK:-false}
ARG DISABLE_ESLINT_PLUGIN
ENV DISABLE_ESLINT_PLUGIN ${DISABLE_ESLINT_PLUGIN:-false}

WORKDIR /app
# copy the package.json to install dependencies
COPY package*.json yarn* ./

# install node packages: clean obsolete files
RUN npm config set depth 0
RUN yarn install --frozen-lockfile && \
    rm -rf /tmp/*

# App specific build time variables (not always needed)
ARG REACT_APP_API_URL
ARG REACT_APP_API_URL ${REACT_APP_API_URL:-http://localhost}

# build app for production with minification
COPY . .
RUN yarn build

#####################################
##               Release           ##
#####################################
FROM nginx:stable-alpine as release

ENV PORT 3000
ENV HOST 0.0.0.0

EXPOSE ${PORT}

# use a custom template for nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf.template

# bring the built files from the previous step
COPY --from=build /app/build /usr/share/nginx/html

CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
