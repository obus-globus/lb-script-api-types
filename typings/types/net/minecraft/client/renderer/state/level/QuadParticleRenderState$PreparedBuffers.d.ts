import type { GpuBufferSlice } from '../../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SingleQuadParticle$Layer } from '../../../../../../net/minecraft/client/particle/SingleQuadParticle$Layer.d.ts'
import type { QuadParticleRenderState$PreparedLayer } from '../../../../../../net/minecraft/client/renderer/state/level/QuadParticleRenderState$PreparedLayer.d.ts'
export class QuadParticleRenderState$PreparedBuffers extends Record {
    // private dynamicTransforms: GpuBufferSlice;
    // private indexCount: number;
    // private layers: Map<SingleQuadParticle$Layer, QuadParticleRenderState$PreparedLayer>;
    dynamicTransforms(): GpuBufferSlice;
    equals(o: Object | null): boolean;
    hashCode(): number;
    indexCount(): number;
    layers(): Map<SingleQuadParticle$Layer, QuadParticleRenderState$PreparedLayer>;
    toString(): string;
}