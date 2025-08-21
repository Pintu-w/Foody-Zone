import React, { createContext, useEffect, useState } from 'react'


 export const AuthContext = createContext()

export const AuthProvider = ( {children}) => {
  const [buttonData,setButtonData]=useState()
  const [searchData,setSearchData]=useState()
  const [cardClicked , setCardClicked]=useState([])
  const [cardDetails,setCardDeatils] = useState(false);
const [cartData,setCartData]=useState([])


//  


  return (
    <AuthContext.Provider value={{buttonData,setButtonData,searchData,setSearchData ,cardClicked , setCardClicked,cardDetails,setCardDeatils,cartData,setCartData}}  >
{children}
    </AuthContext.Provider>
  )
}
