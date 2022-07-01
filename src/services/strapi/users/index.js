import { strapiAxios } from '../../../configs/axios'
import { strapiApi } from '../../../constants/api/strapiApi'

export const strapiGetUserMe = async () => await strapiAxios.get(strapiApi.users.userMe)

export const strapiGetUsers = async ({valueSearch, valueZone}) => await strapiAxios.get(strapiApi.users.user({valueSearch, valueZone}))

export const strapiGetUserById = async (id) => await strapiAxios.get(strapiApi.users.userId(id))

export const strapiPutUser = async (id, data) => await strapiAxios.put(`${strapiApi.users.userPost}/${id}`, data)

export const strapiPostUsers = async (data) => await strapiAxios.post(strapiApi.users.userPost, data)
