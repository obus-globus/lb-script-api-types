import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntityRenderState$ShadowPiece } from '../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState$ShadowPiece.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { SubmitNode } from '../../../../../net/minecraft/client/renderer/feature/submit/SubmitNode.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
export class ShadowFeatureRenderer$Submit extends Record implements SubmitNode {
    constructor(pose: Matrix4fc, radius: number, pieces: EntityRenderState$ShadowPiece[])
    // private pieces: EntityRenderState$ShadowPiece[];
    // private pose: Matrix4fc;
    // private radius: number;
    equals(o: Object | null): boolean;
    featureType(): FeatureRendererType<ShadowFeatureRenderer$Submit>;
    hashCode(): number;
    pieces(): EntityRenderState$ShadowPiece[];
    pose(): Matrix4fc;
    radius(): number;
    toString(): string;
}