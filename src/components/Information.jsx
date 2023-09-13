import { usePreviewContext } from '../context/PreviewProvider';
import icon_minus from '../assets/images/icon-minus.svg'
import icon_plus from '../assets/images/icon-plus.svg'


const Information = () => {
   const { newPrice, discount, quantity, handleAddProduct, handleSubtractProduct, handleAddToCart } = usePreviewContext()

   return (
      <div className="px-12 py-36 flex flex-col gap-10">

         <section className="flex flex-col justify-start gap-5">
            <p className="uppercase font-bold tracking-widest text-[#ff7d1a]">Sneaker Company</p>
            <h1 className="text-5xl font-bold text-[#1d2025]">Fall Limited Edition Sneakers</h1>
         </section>

         <section className="flex flex-col gap-8">
            <p className="text-lg text-[#68707d]">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div className="flex flex-col gap-2">
               <div className="flex items-center gap-5">
                  <h3 className="text-3xl font-bold">${newPrice.toFixed(2)}</h3>
                  <div className="bg-[#ffede0] text-[#ff7d1a] font-bold rounded-md px-2 py-0.5">{discount}%</div>
               </div>
               <div className="relative text-[#b6bcc8] font-bold">
                  <div className="w-[3.5rem] h-[0.100rem] bg-[#b6bcc8] absolute top-[0.8rem]"></div>
                  $250.00
               </div>
            </div>
         </section>

         <section className="grid grid-cols-3 gap-5">
            <div className="col-span-1 flex justify-between items-center bg-[#f7f8fd] px-3 py-4 rounded-lg">
               <button onClick={handleSubtractProduct} className="flex justify-center items-center">
                  <img src={icon_minus} alt="icon_minus" />
               </button>
               <div className="flex justify-center items-center font-bold">{quantity}</div>
               <button onClick={handleAddProduct} className="flex justify-center items-center">
                  <img src={icon_plus} alt="icon_plus" />
               </button>
            </div>
            <button onClick={handleAddToCart} className="col-span-2 flex justify-center items-center gap-5 bg-[#ff7d1a] text-white font-bold rounded-lg hover:opacity-50">
               <svg width={22} height={20} xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fillRule="nonzero" />
               </svg>
               Add to cart
            </button>
         </section>

      </div>
   )
}

export default Information
