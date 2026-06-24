import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SingleQuadParticle$Layer } from '../../../../../net/minecraft/client/particle/SingleQuadParticle$Layer.d.ts'
import type { StagedVertexBuffer$Draw } from '../../../../../net/minecraft/client/renderer/StagedVertexBuffer$Draw.d.ts'
export class QuadParticleFeatureRenderer$PreparedGroup extends Record {
    private constructor(layers: Map<SingleQuadParticle$Layer, StagedVertexBuffer$Draw>, translucent: boolean)
    // private layers: Map<SingleQuadParticle$Layer, StagedVertexBuffer$Draw>;
    // private translucent: boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    layers(): Map<SingleQuadParticle$Layer, StagedVertexBuffer$Draw>;
    toString(): string;
    translucent(): boolean;
}