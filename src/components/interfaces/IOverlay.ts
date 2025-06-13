import { Dispatch, SetStateAction } from 'react'

export interface IOverlay {
  showSidebar: boolean
  showCart: boolean
  showSlider: boolean
  setShowSidebar: Dispatch<SetStateAction<boolean>>
  setShowCart: Dispatch<SetStateAction<boolean>>
  setShowSlider: Dispatch<SetStateAction<boolean>>
}
