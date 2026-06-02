import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockPlaceContext } from '../../../../../net/minecraft/world/item/context/BlockPlaceContext.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class DirectionalPlaceContext extends BlockPlaceContext {
    static at(paramcontext: BlockPlaceContext, parampos: BlockPos, paramdirection: Direction): BlockPlaceContext;
    constructor(level: Level, pos: BlockPos, direction: Direction, dispensed: ItemStack, clickedFace: Direction)
    // private direction: Direction;
    canPlace(): boolean;
    getClickedPos(): BlockPos;
    getHorizontalDirection(): Direction;
    getNearestLookingDirection(): Direction;
    getNearestLookingDirections(): Direction[];
    getRotation(): number;
    isSecondaryUseActive(): boolean;
    replacingClickedOnBlock(): boolean;
}