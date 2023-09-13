import { usePreviewContext } from "../context/PreviewProvider";

const Preview = () => {
   const { products, thumbnails, selectedProduct, selectedThumbnail, handleSelectThumbnail, handleOpenLightbox } = usePreviewContext()

   return (
      <>
         <div className="px-12 py-20 flex flex-col gap-8">

            <div onClick={handleOpenLightbox} className="overflow-hidden rounded-2xl h-[32rem] relative cursor-pointer">
               <img src={products[selectedProduct]} alt={`product${selectedProduct + 1}`} className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>

            <div className="flex items-center gap-6">
               { thumbnails.map((thumbnail, thumbnailIndex) => (
                  <div onClick={() => handleSelectThumbnail(thumbnailIndex)} key={thumbnailIndex} className={`${ selectedThumbnail === thumbnail && "border-2 border-[#ff7d1a]" } overflow-hidden rounded-xl w-[12rem] h-[6.8rem] relative hover:opacity-50`}>
                     <img src={thumbnail} alt="thumbnail1" className={`${ selectedThumbnail === thumbnail && "opacity-30" } absolute top-0 left-0 w-full h-full object-cover`} />
                  </div>
               ))}
               
            </div>
         </div>
      </>
   )
}

export default Preview
