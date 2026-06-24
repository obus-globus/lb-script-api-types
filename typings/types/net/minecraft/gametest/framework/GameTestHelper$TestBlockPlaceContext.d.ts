import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { GameTestHelper } from '../../../../net/minecraft/gametest/framework/GameTestHelper.d.ts'
import type { InteractionHand } from '../../../../net/minecraft/world/InteractionHand.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockPlaceContext } from '../../../../net/minecraft/world/item/context/BlockPlaceContext.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockHitResult } from '../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
export class GameTestHelper$TestBlockPlaceContext extends BlockPlaceContext {
    static at(paramcontext: BlockPlaceContext, parampos: BlockPos, paramdirection: Direction): BlockPlaceContext;
    constructor(null_: GameTestHelper, level: Level, hand: InteractionHand, itemStackInHand: ItemStack, hitResult: BlockHitResult, placeDirection: Direction)
    // private placeDirection: Direction;
    getNearestLookingDirection(): Direction;
    getNearestLookingDirections(): Direction[];
}