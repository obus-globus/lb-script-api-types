import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { InteractionHand } from '../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { UseOnContext } from '../../../../../net/minecraft/world/item/context/UseOnContext.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockHitResult } from '../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
export class BlockPlaceContext extends UseOnContext {
    static at(paramcontext: BlockPlaceContext, parampos: BlockPos, paramdirection: Direction): BlockPlaceContext;
    constructor(player: Player, hand: InteractionHand, itemInHand: ItemStack, hitResult: BlockHitResult)
    constructor(context: UseOnContext)
    constructor(level: Level, player: Player, hand: InteractionHand, itemStackInHand: ItemStack, hitResult: BlockHitResult)
    // private relativePos: BlockPos;
    // private replaceClicked: boolean;
    canPlace(): boolean;
    getClickedPos(): BlockPos;
    getNearestLookingDirection(): Direction;
    getNearestLookingDirections(): Direction[];
    getNearestLookingVerticalDirection(): Direction;
    replacingClickedOnBlock(): boolean;
}