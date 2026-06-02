import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
import type { BedState } from '../../../../../../../net/ccbluex/liquidbounce/utils/block/bed/BedState.d.ts'
import type { SurroundingBlock } from '../../../../../../../net/ccbluex/liquidbounce/utils/block/bed/SurroundingBlock.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ModuleBedPlates$BedStateRenderState extends Object implements Comparable<ModuleBedPlates$BedStateRenderState> {
    constructor(bedState: BedState)
    constructor(bedState: BedState, distance: number, surrounding: SurroundingBlock[], itemStacksForRender: ItemStack[])
    bedState: BedState;
    distance: number;
    itemStacksForRender: ItemStack[];
    surrounding: SurroundingBlock[];
    compareTo(other: ModuleBedPlates$BedStateRenderState): number;
    component1(): BedState;
    component2(): number;
    component3(): SurroundingBlock[];
    component4(): ItemStack[];
    copy(bedState: BedState, distance: number, surrounding: SurroundingBlock[], itemStacksForRender: ItemStack[]): ModuleBedPlates$BedStateRenderState;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}