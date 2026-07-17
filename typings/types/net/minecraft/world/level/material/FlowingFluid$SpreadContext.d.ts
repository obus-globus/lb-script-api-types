import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { FlowingFluid } from '../../../../../net/minecraft/world/level/material/FlowingFluid.d.ts'
export class FlowingFluid$SpreadContext extends Object {
    private constructor(null_: FlowingFluid, level: BlockGetter, origin: BlockPos)
    // private holeCache: JavaMap<any, any>;
    // private level: BlockGetter;
    // private origin: BlockPos;
    // private stateCache: JavaMap<any, any>;
    getBlockState(pos: BlockPos): BlockState;
    // private getBlockState(pos: BlockPos, key: number): BlockState;
    // private getCacheKey(pos: BlockPos): number;
    isHole(pos: BlockPos): boolean;
}