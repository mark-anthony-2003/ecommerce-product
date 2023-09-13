import product from '../assets/images/image-product-1-thumbnail.jpg'
import icon_delete from '../assets/images/icon-delete.svg'
import { usePreviewContext } from '../context/PreviewProvider';

const Cart = () => {
   const { newPrice, quantity, totalPrice, handleDeleteItem } = usePreviewContext()

   return (
      <div className={`absolute top-12 -right-40 w-[22rem] ${totalPrice === 0 && "h-72"} shadow-xl rounded-2xl bg-white flex flex-col overflow-hidden`}>
         <div className="w-full px-4 py-5 border-b font-bold">Cart</div>
         
         { totalPrice === 0 ? (
            <div className="flex-grow flex justify-center items-center">
               <p className="font-bold text-[#68707d]">Your cart is empty.</p>
            </div>
         ) : (
            <div className="w-full p-5">
               <div className="flex justify-between items-center gap-4 mb-5">
                  <div className="overflow-hidden rounded-lg w-12 h-14 relative">
                     <img src={product} alt="product" className="absolute top-0 left-0 w-full h-full object-cover" />
                  </div>
                  <div className="text-[#68707d]">
                     <p>Fall Limited Edition Sneakers</p>
                     <p>${newPrice.toFixed(2)} x {quantity} <span className="text-black font-semibold">${totalPrice.toFixed(2)}</span></p>
                  </div>
                  <div onClick={handleDeleteItem}>
                     <img src={icon_delete} alt="icon_delete" />
                  </div>
               </div>
               <button className="w-full bg-[#ff7d1a] text-white font-bold rounded-lg py-4">Checkout</button>
            </div>
         ) }
      </div>
   )
}

export default Cart
