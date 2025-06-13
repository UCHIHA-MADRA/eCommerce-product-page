import React, { useState } from 'react'
import { ThumbnailImageData } from '../data/ThumbnailImageData'
import { ProductImageData } from '../data/ProductImageData'
import { toast } from "react-hot-toast"

const Main = (props) => {
    const { cartCount, setCartCount, selected, setSelected, setShowSlider } = props
    const [count, setCount] = useState(0)

    const SOURCE = ProductImageData.find(item => item.imageNumber === selected)

    const handleAddToCart = () => {
        if (cartCount === 10) {
            toast.success("Max quantity allowed is 10", {
                style: {
                    backgroundColor: "#03210b",
                    color: "#fff9db"
                }
            })
            return
        } else if (cartCount + count > 10) {
            toast.success("Max quantity allowed is 10", {
                style: {
                    backgroundColor: "#03210b",
                    color: "#fff9db"
                }
            })
            return
        } else {
            if (count === 0) {
                setCartCount(prev => prev + 1)
            } else {
                setCartCount(prev => prev + count)
                setCount(0)
            }

            toast.success("Product added successfully!", {
                style: {
                    backgroundColor: "#03210b",
                    color: "#fff9db"
                }
            })
        }
    }

    const increaseCount = () => {
        if (count !== 10) {
            setCount(prev => prev + 1)
        } else {
            toast.success("Max quantity allowed is 10", {
                style: {
                    backgroundColor: "#03210b",
                    color: "#fff9db"
                }
            })
        }
    }

    const decreaseCount = () => {
        if (count !== 0) {
            setCount(prev => prev - 1)
        }
    }

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-8 lg:py-16">
            <div className="w-full">
                <div className="w-full h-80 sm:h-96 lg:h-80 xl:h-96 rounded-lg overflow-hidden cursor-pointer" onClick={() => setShowSlider(true)}>
                    <img src={SOURCE?.source} alt="Product" className="w-full h-full object-cover" />
                </div>
                <div className="hidden sm:grid grid-cols-4 gap-4 mt-6">
                    {ThumbnailImageData.map((item) => (
                        <div key={item.thumbnailNumber} className={`w-full h-20 rounded-lg overflow-hidden cursor-pointer border-2 ${selected === item.thumbnailNumber ? 'border-primary' : 'border-transparent'}`} onClick={() => setSelected(item.thumbnailNumber)}>
                            <img src={item.source} alt="Thumbnail" className={`w-full h-full object-cover ${selected === item.thumbnailNumber ? 'opacity-50' : 'opacity-100'}`} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full flex flex-col justify-center">
                <div className="space-y-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary/60">Sneaker Company</p>
                    <h2 className="text-3xl lg:text-4xl font-bold">Fall Limited Edition Sneakers</h2>
                    <p className="text-primary/60 leading-relaxed">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                </div>
                <div className="flex items-center justify-between sm:flex-col sm:items-start sm:justify-start gap-2 py-6">
                    <div className="flex items-center gap-4">
                        <p className="text-3xl font-bold">$125.00</p>
                        <div className="bg-primary text-secondary px-2 py-1 rounded text-sm font-bold">50%</div>
                    </div>
                    <p className="text-primary/60 font-bold line-through">$250.00</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-primary/10 rounded-lg flex items-center justify-between px-4 py-3">
                        <button onClick={decreaseCount}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                            </svg>
                        </button>
                        <p className="font-bold">{count}</p>
                        <button onClick={increaseCount}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </div>
                    <button className="bg-primary text-secondary rounded-lg px-4 py-3 font-bold sm:col-span-2 flex items-center justify-center gap-4" onClick={handleAddToCart}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        Add to cart
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Main