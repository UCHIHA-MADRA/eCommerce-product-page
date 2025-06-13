import { Dispatch, SetStateAction } from 'react'

export interface IMain {
  cartCount: number
  selected: number
  setSelected: Dispatch<SetStateAction<number>>
  setCartCount: Dispatch<SetStateAction<number>>
  setShowSlider: Dispatch<SetStateAction<boolean>>
}
