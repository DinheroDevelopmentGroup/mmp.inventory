import { type NBT } from 'prismarine-nbt';

import proxy from '../internal.proxy/local.js';

interface EmptyItem {
  present: false;
  itemId: undefined;
  itemCount: undefined;
  nbtData: undefined;
}

interface FilledItem {
  present: true;
  itemId: number;
  itemCount: number;
  nbtData: NBT | undefined;
}

type Item = EmptyItem | FilledItem;

export const inventory = {
  setCreativeSlot(slot: number, item: Item): void {
    proxy.writeUpstream('set_creative_slot', { slot, item });
  },
};

export default inventory;
