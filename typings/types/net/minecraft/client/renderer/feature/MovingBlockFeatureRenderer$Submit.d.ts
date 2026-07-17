import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MovingBlockRenderState } from '../../../../../net/minecraft/client/renderer/block/MovingBlockRenderState.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { TranslucentSubmit } from '../../../../../net/minecraft/client/renderer/feature/submit/TranslucentSubmit.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
export class MovingBlockFeatureRenderer$Submit extends Record implements TranslucentSubmit {
    constructor(pose: Matrix4fc, movingBlockRenderState: MovingBlockRenderState, outlineColor: number)
    // private movingBlockRenderState: MovingBlockRenderState;
    // private outlineColor: number;
    // private pose: Matrix4fc;
    distanceToCameraSq(): number;
    equals(o: Object | null): boolean;
    featureType(): FeatureRendererType<MovingBlockFeatureRenderer$Submit>;
    hashCode(): number;
    movingBlockRenderState(): MovingBlockRenderState;
    outlineColor(): number;
    pose(): Matrix4fc;
    toString(): string;
}