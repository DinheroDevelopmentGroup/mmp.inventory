import proxy from '../proxy/local.js'
import { type NBT } from 'prismarine-nbt'

interface EmptyItem {
  present: false
  itemId: undefined
  itemCount: undefined
  nbtData: undefined
}

interface FilledItem {
  present: true
  itemId: number
  itemCount: number
  nbtData: NBT | undefined
}

type Item = EmptyItem | FilledItem

export const inventory = {
  setCreativeSlot (slot: number, item: Item): void {
    proxy.writeServer('set_creative_slot', { slot, item })
  }
}

export default inventory
