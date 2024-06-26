import { useContext } from 'react'
import './index.css' 
import DataContext from './content/DataContext'; 
import { FaLaptop , FaTabletAlt , FaMobileAlt } from 'react-icons/fa'
const Header = ({title} ) => {
  const {width}= useContext(DataContext);
  return (
    <header className='Header'>
      <h1>{title}</h1>
      {width < 768 ? <FaMobileAlt/> : width < 992 ? <FaTabletAlt/> : <FaLaptop /> }
     </header>
  )
}

export default Header