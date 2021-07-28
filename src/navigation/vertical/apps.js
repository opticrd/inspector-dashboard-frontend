import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User } from 'react-feather'

export default [
  // {
  //   header: 'Apps & Pages'
  // },
  // {
  //   id: 'email',
  //   title: 'Email',
  //   icon: <Mail size={20} />,
  //   navLink: '/apps/email'
  // },
  // {
  //   id: 'chat',
  //   title: 'Chat',
  //   icon: <MessageSquare size={20} />,
  //   navLink: '/apps/chat'
  // },
  // {
  //   id: 'todo',
  //   title: 'Todo',
  //   icon: <CheckSquare size={20} />,
  //   navLink: '/apps/todo'
  // },
  // {
  //   id: 'calendar',
  //   title: 'Calendar',
  //   icon: <Calendar size={20} />,
  //   navLink: '/apps/calendar'
  // },
  // {
  //   id: 'invoiceApp',
  //   title: 'Invoice',
  //   icon: <FileText size={20} />,
  //   children: [
  //     {
  //       id: 'invoiceList',
  //       title: 'List',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/invoice/list'
  //     },
  //     {
  //       id: 'invoicePreview',
  //       title: 'Preview',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/invoice/preview'
  //     },
  //     {
  //       id: 'invoiceEdit',
  //       title: 'Edit',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/invoice/edit'
  //     },
  //     {
  //       id: 'invoiceAdd',
  //       title: 'Add',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/invoice/add'
  //     }
  //   ]
  // },
  // {
  //   id: 'eCommerce',
  //   title: 'eCommerce',
  //   icon: <ShoppingCart size={20} />,
  //   children: [
  //     {
  //       id: 'shop',
  //       title: 'Shop',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/shop'
  //     },
  //     {
  //       id: 'detail',
  //       title: 'Details',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/product-detail'
  //     },
  //     {
  //       id: 'wishList',
  //       title: 'Wish List',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/wishlist'
  //     },
  //     {
  //       id: 'checkout',
  //       title: 'Checkout',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/checkout'
  //     }
  //   ]
  // },
  // {
  //   id: 'bandeja',
  //   title: 'Bandeja',
  //   icon: <Mail size={20} />,
  //   navLink: '/apps/bandeja'
  // },
  {
    id: 'users',
    title: 'Usuario',
    icon: <User size={20} />,
    children: [
      {
        id: 'list',
        title: 'Lista',
        icon: <Circle size={12} />,
        navLink: '/apps/user/list'
      },
      // {
      //   id: 'view',
      //   title: 'Ver',
      //   icon: <Circle size={12} />,
      //   navLink: '/apps/user/view'
      // },
      // {
      //   id: 'edit',
      //   title: 'Editar',
      //   icon: <Circle size={12} />,
      //   navLink: '/apps/user/edit'
      // },
      // {
      //   id: 'create',
      //   title: 'Crear',
      //   icon: <Circle size={12} />,
      //   navLink: '/apps/user/create'
      // },
      {
        id: 'reportero',
        title: 'Reportero',
        icon: <Circle size={12} />,
        navLink: '/apps/user/reportero'
      },
      {
        id: 'instituciones',
        title: 'Instituciones',
        icon: <Circle size={12} />,
        navLink: '/apps/user/instituciones'
      },
      {
        id: 'oficiales',
        title: 'Oficiales',
        icon: <Circle size={12} />,
        navLink: '/apps/user/oficiales'
      }
    ]
  }
]
