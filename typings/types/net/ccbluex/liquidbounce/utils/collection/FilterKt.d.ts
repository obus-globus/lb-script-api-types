import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Filter } from '../../../../../net/ccbluex/liquidbounce/utils/collection/Filter.d.ts'
import type { HotbarItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
export class FilterKt extends Object {
    static getSlot(filter: Filter, blocks: (Object | null)[], offhand: boolean): HotbarItemSlot;
}