import React, { useContext } from 'react';

export const UserContext = React.createContext();

export default function Heading({ children }) {
  const level = useContext(UserContext);
  switch (level) {
    case 1:
      return <h1>1{children}</h1>;
    case 2:
      return <h2>2{children}</h2>;
    case 3:
      return <h3>3{children}</h3>;
    case 4:
      return <h4>4{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error('Unknown level: ' + level);
  }
}

// Write code below
export function myExample(){
  return (
    <div className="App">
			<UserContext.Provider value={1}>
				<Heading />
			</UserContext.Provider>
	</div>
  );
}



