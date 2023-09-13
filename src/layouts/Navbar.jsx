import { useState } from 'react'
import { usePreviewContext } from '../context/PreviewProvider';
import logo from '../assets/images/logo.svg'
import img_avatar from '../assets/images/image-avatar.png'
import Cart from '../components/Cart';

const Navbar = () => {
   const { openCart, handleOpenCart, quantity, totalPrice } = usePreviewContext()
   
   const [avatar, setAvatar] = useState(false)
   const handleClickAvatar = () => setAvatar(prevState => !prevState)
   
   const menus = [ "Collections", "Men", "Women", "About", "Contact" ]
   const [selectedMenu, setSelectedMenu] = useState("")
   const handleSelectMenu = (menuIndex) => setSelectedMenu(menus[menuIndex])

   return (
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center border-b bg-white mx-40">

         <div className="flex items-center gap-16">
            <img src={logo} alt="logo" />
            <ul className="flex items-center gap-8">
               { menus.map((menu, menuIndex) => (
                  <div onClick={() => handleSelectMenu(menuIndex)} key={menuIndex} className="cursor-pointer py-8 relative">
                     <li className={`text-lg text-${selectedMenu === menu ? 'black' : "[#68707d]"} hover:text-black`}>{menu}</li>
                     <div className={`${selectedMenu === menu && "border-b-4 border-[#ff7d1a]"} hover:border-b-4 border-[#ff7d1a] w-full absolute top-0 left-0 bottom-0`}></div>
                  </div>
               ))}
            </ul>
         </div>

         <div className="flex items-center gap-8">
            <div onClick={handleOpenCart} className="relative cursor-pointer relative">
               <svg width={22} height={20} xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#68707d" fillRule="nonzero" />
               </svg>
               { totalPrice !== 0 && <div className="bg-[#ff7d1a] text-white text-xs font-semibold rounded-xl px-2 absolute -top-2 -right-3">{quantity}</div> }
               { openCart && <Cart /> }
            </div>
            <div className="w-12">
               <div onClick={handleClickAvatar} className={`${ avatar === true && "border-[#ff7d1a]" } rounded-full border-2 cursor-pointer`}>
                  <img src={img_avatar} alt="avatar" />
               </div>
            </div>
         </div>
      </nav>
   )
}

export default Navbar
