import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { SubmitNode } from '../../../../../net/minecraft/client/renderer/feature/submit/SubmitNode.d.ts'
import type { QuadParticleRenderState } from '../../../../../net/minecraft/client/renderer/state/level/QuadParticleRenderState.d.ts'
export class QuadParticleFeatureRenderer$Submit extends Record implements SubmitNode {
    constructor(particles: QuadParticleRenderState, translucent: boolean)
    // private particles: QuadParticleRenderState;
    // private translucent: boolean;
    equals(o: Object | null): boolean;
    featureType(): FeatureRendererType<QuadParticleFeatureRenderer$Submit>;
    hashCode(): number;
    particles(): QuadParticleRenderState;
    toString(): string;
    translucent(): boolean;
}