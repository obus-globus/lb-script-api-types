import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MovingBlockRenderState } from '../../../../net/minecraft/client/renderer/block/MovingBlockRenderState.d.ts'
import type { Matrix4fc } from '../../../../org/joml/Matrix4fc.d.ts'
export class SubmitNodeStorage$MovingBlockSubmit extends Record {
    constructor(pose: Matrix4fc, movingBlockRenderState: MovingBlockRenderState)
    // private movingBlockRenderState: MovingBlockRenderState;
    // private pose: Matrix4fc;
    equals(o: Object | null): boolean;
    hashCode(): number;
    movingBlockRenderState(): MovingBlockRenderState;
    pose(): Matrix4fc;
    toString(): string;
}