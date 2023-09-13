import { createPortal } from 'react-dom'
import icon_close from '../assets/images/icon-close.svg'
import icon_previous from '../assets/images/icon-previous.svg'
import icon_next from '../assets/images/icon-next.svg'
import { usePreviewContext } from '../context/PreviewProvider'

const Lightbox = () => {
   const { isLignboxOpen, products, thumbnails, handleCloseLightbox, selectedLightboxProduct, selectedLightboxThumbnail, handleSelectLightbox, handlePrevImage, handleNextImage } = usePreviewContext()

   return createPortal (
      <div className={`fixed inset-0 flex items-center justify-center z-50 ${isLignboxOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
         <div className="fixed inset-0 bg-black opacity-75"></div>
         <div className="w-[30rem] flex flex-col gap-10">

            <div className="w-full relative">
               
               <div onClick={handleCloseLightbox} className="w-full flex justify-end items-center py-5 mr-2">
                  <img src={icon_close} alt="icon_close" />
               </div>

               <div onClick={handlePrevImage} className="absolute inset-y-64 -left-6 z-50 flex justify-center items-center bg-white rounded-full w-12 h-12">
                  <img src={icon_previous} alt="icon_previous" className="mr-1" />
               </div>
               <div className="overflow-hidden rounded-2xl h-[30rem] relative">
                  <img src={products[selectedLightboxProduct]} alt={`product${selectedLightboxProduct + 1}`} className="absolute top-0 left-0 w-full h-full object-cover" />
               </div>
               <div onClick={handleNextImage} className="absolute inset-y-64 -right-6 z-50 flex justify-center items-center bg-white rounded-full w-12 h-12">
                  <img src={icon_next} alt="icon_next" className="ml-1" />
               </div>

            </div>

            <div className="flex items-center mx-10 gap-6">
               { thumbnails.map((thumbnail, thumbnailIndex) => (
                  <div onClick={() => handleSelectLightbox(thumbnailIndex)} key={thumbnailIndex} className={`${ selectedLightboxThumbnail === thumbnail && "border-2 border-[#ff7d1a] bg-white" } overflow-hidden rounded-xl w-[12rem] h-[6rem] relative`}>
                     <img src={thumbnail} alt="thumbnail1" className={`${ selectedLightboxThumbnail === thumbnail && "opacity-40" } absolute top-0 left-0 w-full h-full object-cover`} />
                  </div>
               ))}
            </div>

         </div>
      </div>, document.body
   )
}

export default Lightbox
