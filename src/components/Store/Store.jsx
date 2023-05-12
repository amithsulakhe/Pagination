import {configureStore} from '@reduxjs/toolkit'
import FIlterslice from '../Reduxslice/FIlterslice'
import StoreFilterData from '../Reduxslice/StoreFilterData'
import UserSelectedSlice from '../Reduxslice/UserSelectedSlice'
const Store=configureStore(
    {
        reducer:{
            filter:FIlterslice,
            storefilter:StoreFilterData,
            userSelected:UserSelectedSlice
        }

    }
)

export default Store