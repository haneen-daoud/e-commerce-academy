import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export const UserContext = createContext(null)

export function UserContextProvider({ children }) {
  const [userToken, setUserToken] = useState(null)
  const [userData, setUserData] = useState(null)
  let [loader, setLoader] = useState(true)
  const getUserData = async () => {
    if (userToken) {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/user/profile`,
        { headers: { Authorization: `Tariq__${userToken}` } })

      setUserData(data.user)
      setLoader(false)
    }


  }
  useEffect(() => {
    getUserData();
  }, [userToken])

  return <UserContext.Provider value={{ userToken, setUserToken, userData, setUserData, loader }}>
    {children}
  </UserContext.Provider>
}
