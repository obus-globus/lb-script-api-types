import type { LoadingCache } from '../../../../../../../com/google/common/cache/LoadingCache.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockInWorld } from '../../../../../../../net/minecraft/world/level/block/state/pattern/BlockInWorld.d.ts'
export class BlockPattern$BlockPatternMatch extends Object {
    constructor(frontTopLeft: BlockPos, forwards: Direction, up: Direction, cache: LoadingCache<BlockPos, BlockInWorld>, width: number, height: number, depth: number)
    // private cache: LoadingCache<BlockPos, BlockInWorld>;
    readonly depth: number;
    readonly forwards: Direction;
    readonly frontTopLeft: BlockPos;
    readonly height: number;
    readonly up: Direction;
    readonly width: number;
    getBlock(right: number, down: number, forwards: number): BlockInWorld;
    getDepth(): number;
    getForwards(): Direction;
    getFrontTopLeft(): BlockPos;
    getHeight(): number;
    getUp(): Direction;
    getWidth(): number;
    toString(): string;
}