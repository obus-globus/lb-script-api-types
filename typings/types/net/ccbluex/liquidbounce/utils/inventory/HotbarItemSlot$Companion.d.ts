import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HotbarItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
export class HotbarItemSlot$Companion extends Object {
    PREFER_NEARBY: (param0: Object) => boolean;
    readonly mainHandSlots: HotbarItemSlot[];
    invoke(hotbarIndex: number): HotbarItemSlot;
}