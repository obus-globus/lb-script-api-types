import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntityRenderState$LeashState } from '../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState$LeashState.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { SubmitNode } from '../../../../../net/minecraft/client/renderer/feature/submit/SubmitNode.d.ts'
import type { Matrix4f } from '../../../../../org/joml/Matrix4f.d.ts'
export class LeashFeatureRenderer$Submit extends Record implements SubmitNode {
    constructor(pose: Matrix4f, leashState: EntityRenderState$LeashState)
    // private leashState: EntityRenderState$LeashState;
    // private pose: Matrix4f;
    equals(o: Object | null): boolean;
    featureType(): FeatureRendererType<LeashFeatureRenderer$Submit>;
    hashCode(): number;
    leashState(): EntityRenderState$LeashState;
    pose(): Matrix4f;
    toString(): string;
}