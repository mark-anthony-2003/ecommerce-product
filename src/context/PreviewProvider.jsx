/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react"

// products
import product1 from '../assets/images/image-product-1.jpg'
import product2 from '../assets/images/image-product-2.jpg'
import product3 from '../assets/images/image-product-3.jpg'
import product4 from '../assets/images/image-product-4.jpg'
// thumbnails
import thumbnail1 from '../assets/images/image-product-1-thumbnail.jpg'
import thumbnail2 from '../assets/images/image-product-2-thumbnail.jpg'
import thumbnail3 from '../assets/images/image-product-3-thumbnail.jpg'
import thumbnail4 from '../assets/images/image-product-4-thumbnail.jpg'

const PreviewContent = createContext()

export const PreviewProvider = ({ children }) => {
   // modal cart
   const [openCart, setOpenCart] = useState(false)
   const handleOpenCart = () => setOpenCart((prevState) => !prevState)

   // products preview
   const products = [ product1, product2, product3, product4 ]
   const thumbnails = [ thumbnail1, thumbnail2, thumbnail3, thumbnail4 ]

   const [selectedProduct, setSelectedProduct] = useState(0)
   const [selectedThumbnail, setSelectedThumbnail] = useState(thumbnails[0])
   const handleSelectThumbnail = (thumbnailIndex) => {
      setSelectedThumbnail(thumbnails[thumbnailIndex])
      setSelectedProduct(thumbnailIndex)
   }

   // product quantity
   let newPrice = 125
   let discount = 0.50 * 100
   const [quantity, setQuantity] = useState(0)
   const handleAddProduct = () => setQuantity((prevState) => prevState + 1)
   const handleSubtractProduct = () => {
      setQuantity((prevState) => {
         if (prevState > 0) {
            return prevState - 1
         } else {
            return prevState
         }
      })
   }

   // cart items
   const [totalPrice, setTotalPrice] = useState(0)
   const handleAddToCart = () => {
      setTotalPrice(newPrice * quantity)
   }

   const handleDeleteItem = () => {
      setTotalPrice(0)
   }

   const [isLignboxOpen, setIsLightboxOpen] = useState(false)
   const handleOpenLightbox = () => setIsLightboxOpen(true)
   const handleCloseLightbox = () => setIsLightboxOpen(false)
   const [selectedLightboxProduct, setSelectedLightboxProduct] = useState(0)
   const [selectedLightboxThumbnail, setSelectedLightboxThumbnail] = useState(thumbnails[0])

   const handlePrevImage = () => {
      setSelectedLightboxProduct((prevIndex) => prevIndex === 0 ? 0 : prevIndex - 1)
   }
   const handleNextImage = () => {
      setSelectedLightboxProduct((prevIndex) => prevIndex === products.length - 1 ? products.length - 1 : prevIndex + 1 )
   }

   const handleSelectLightbox = (thumbnailIndex) => {
      setSelectedLightboxThumbnail(thumbnails[thumbnailIndex])
      setSelectedLightboxProduct(thumbnailIndex)
   }

   return (
      <PreviewContent.Provider
         value={{ 
            openCart, handleOpenCart, totalPrice, handleDeleteItem,
            products, thumbnails, selectedProduct, selectedThumbnail, handleSelectThumbnail,
            newPrice, discount, quantity, handleAddProduct, handleSubtractProduct, handleAddToCart,
            isLignboxOpen, handleOpenLightbox, handleCloseLightbox, selectedLightboxProduct, selectedLightboxThumbnail, handleSelectLightbox,
            handlePrevImage, handleNextImage
         }}
      >
         { children }
      </PreviewContent.Provider>
   )
}

export const usePreviewContext = () => useContext(PreviewContent)


