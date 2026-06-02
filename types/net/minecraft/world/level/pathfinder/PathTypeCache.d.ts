import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { PathType } from '../../../../../net/minecraft/world/level/pathfinder/PathType.d.ts'
export class PathTypeCache extends Object {
    constructor()
    // private pathTypes: PathType[];
    // private positions: number[];
    // private compute(level: BlockGetter, pos: BlockPos, index: number, key: number): PathType;
    // private get(index: number, key: number): PathType;
    getOrCompute(level: BlockGetter, pos: BlockPos): PathType;
    invalidate(pos: BlockPos): void;
}