import React, { createContext } from 'react'

export const Data = createContext();

export const Bioprovider = ({children}) => {
   const Name = "Sandeep"
   const Age = 21

  return (

      <Data.Provider value={{Name, Age}}>
            {children}
      </Data.Provider>

  )
}

// export default Index