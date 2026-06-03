import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { BlockHitResult } from '../../../../../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
export class NoWebPlaceWater$UseAction extends Object {
    constructor(slot: HotbarItemSlot, rotation: Rotation, resolveHitResult: (param0: BlockHitResult) => BlockHitResult | null, onSuccess: (param0: BlockHitResult) => void)
    readonly onSuccess: (param0: BlockHitResult) => void;
    readonly resolveHitResult: (param0: BlockHitResult) => BlockHitResult | null;
    readonly rotation: Rotation;
    readonly slot: HotbarItemSlot;
    component1(): HotbarItemSlot;
    component2(): Rotation;
    component3(): (param0: BlockHitResult) => BlockHitResult | null;
    component4(): (param0: BlockHitResult) => void;
    copy(slot: HotbarItemSlot, rotation: Rotation, resolveHitResult: (param0: BlockHitResult) => BlockHitResult | null, onSuccess: (param0: BlockHitResult) => void): NoWebPlaceWater$UseAction;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}