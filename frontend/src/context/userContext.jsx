import { createContext, useContext, useState } from 'react';

const userContext = createContext();

export const MyProvider = ({ children }) => {
  
  
    const [user, setUser] = useState(null);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export const useMyContext = () => useContext(userContext);
