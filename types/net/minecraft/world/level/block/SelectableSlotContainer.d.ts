import type { OptionalInt } from '../../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockHitResult } from '../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
export interface SelectableSlotContainer extends Object{
    getColumns(): number;
    getHitSlot(hitResult: BlockHitResult, blockFacing: Direction): OptionalInt;
    getRows(): number;
}