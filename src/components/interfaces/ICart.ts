import { Dispatch, SetStateAction } from 'react'

export interface ICart {
  cartCount: number
  setCartCount: Dispatch<SetStateAction<number>>
  setShowCart: Dispatch<SetStateAction<boolean>>
}
