import { Dispatch, SetStateAction } from 'react'

export interface ISlider {
  selected: number
  setSelected: Dispatch<SetStateAction<number>>
}
