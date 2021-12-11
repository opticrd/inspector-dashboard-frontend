// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Shop Components
import Breadcrumbs from '@components/breadcrumbs'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from './Sidebar'
import Products from './Products'

// ** Custom Components

// ** Store & Actions
import {
  addToCart,
  getProducts,
  getCartItems,
  addToWishlist,
  deleteCartItem,
  deleteWishlistItem,
} from '../store/actions'

// ** Styles
import '@styles/base/pages/app-ecommerce.scss'

const Shop = function() {
  // ** States
  const [activeView, setActiveView] = useState('grid')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // ** Vars
  const dispatch = useDispatch()
  const store = useSelector((state) => state.ecommerce)

  // ** Get products
  useEffect(() => {
    dispatch(
      getProducts({
        q: '',
        sortBy: 'featured',
        perPage: 9,
        page: 1,
      }),
    )
  }, [dispatch])

  return (
    <>
      <Breadcrumbs
        breadCrumbTitle="Shop"
        breadCrumbParent="eCommerce"
        breadCrumbActive="Shop"
      />
      <Products
        store={store}
        dispatch={dispatch}
        addToCart={addToCart}
        activeView={activeView}
        getProducts={getProducts}
        sidebarOpen={sidebarOpen}
        getCartItems={getCartItems}
        setActiveView={setActiveView}
        addToWishlist={addToWishlist}
        setSidebarOpen={setSidebarOpen}
        deleteCartItem={deleteCartItem}
        deleteWishlistItem={deleteWishlistItem}
      />
      <Sidebar sidebarOpen={sidebarOpen} />
    </>
  )
}
export default Shop
