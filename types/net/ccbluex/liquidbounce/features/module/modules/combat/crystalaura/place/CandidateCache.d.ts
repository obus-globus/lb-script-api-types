import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class CandidateCache extends Object {
    constructor(candidate: BlockPos)
    readonly canPlace: boolean;
    // private candidate: BlockPos;
    readonly state: BlockState;
    readonly up: BlockPos;
}