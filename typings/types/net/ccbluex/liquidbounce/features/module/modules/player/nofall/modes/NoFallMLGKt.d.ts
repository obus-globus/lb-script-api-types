import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { MlgPlacementActionType } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/MlgPlacementActionType.d.ts'
import type { Item } from '../../../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { BlockState } from '../../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class NoFallMLGKt extends Object {
    static wasMlgPlacementApplied(type: MlgPlacementActionType, item: Item, before: BlockState | null, after: BlockState | null): boolean;
}