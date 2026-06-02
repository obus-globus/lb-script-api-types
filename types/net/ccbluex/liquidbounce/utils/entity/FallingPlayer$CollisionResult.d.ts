import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
export class FallingPlayer$CollisionResult extends Object {
    constructor(pos: BlockPos | null, tick: number)
    readonly pos: BlockPos | null;
    readonly tick: number;
}