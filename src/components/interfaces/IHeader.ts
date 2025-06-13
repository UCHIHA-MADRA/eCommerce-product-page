import { Dispatch, SetStateAction } from 'react'

export interface IHeader {
  cartCount: number
  setShowSidebar: Dispatch<SetStateAction<boolean>>
  setShowCart: Dispatch<SetStateAction<boolean>>
}
