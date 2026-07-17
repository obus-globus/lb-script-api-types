import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { BiPredicate } from '../../../../../java/util/function/BiPredicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DynamicAtlasAllocator$Slot } from '../../../../../net/minecraft/client/gui/render/DynamicAtlasAllocator$Slot.d.ts'
export class DynamicAtlasAllocator<K extends unknown> extends Object {
    constructor(width: number, height: number)
    // private freeSlots: BitSet;
    // private slots: DynamicAtlasAllocator$Slot[];
    // private usedSlotByKey: JavaMap<K, DynamicAtlasAllocator$Slot>;
    // private width: number;
    endFrame(): void;
    freeSlotCount(): number;
    // private freeSlotIf(predicate: (param0: K, param1: DynamicAtlasAllocator$Slot) => boolean): void;
    getOrAllocate(key: K, discardAfterFrame: boolean): DynamicAtlasAllocator$Slot;
    hasSpaceForAll(keys: K[]): boolean;
    reclaimSpaceFor(keys: K[]): boolean;
    usedSlotKeys(): K[];
}