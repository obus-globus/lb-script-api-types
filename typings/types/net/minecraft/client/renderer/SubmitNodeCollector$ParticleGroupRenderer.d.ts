import type { RenderPass } from '../../../../com/mojang/blaze3d/systems/RenderPass.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParticleFeatureRenderer$ParticleBufferCache } from '../../../../net/minecraft/client/renderer/feature/ParticleFeatureRenderer$ParticleBufferCache.d.ts'
import type { QuadParticleRenderState$PreparedBuffers } from '../../../../net/minecraft/client/renderer/state/level/QuadParticleRenderState$PreparedBuffers.d.ts'
import type { TextureManager } from '../../../../net/minecraft/client/renderer/texture/TextureManager.d.ts'
export interface SubmitNodeCollector$ParticleGroupRenderer extends Object{
    isEmpty(): boolean;
    prepare(buffer: ParticleFeatureRenderer$ParticleBufferCache, translucent: boolean): QuadParticleRenderState$PreparedBuffers;
    render(buffers: QuadParticleRenderState$PreparedBuffers, bufferCache: ParticleFeatureRenderer$ParticleBufferCache, renderPass: RenderPass, textureManager: TextureManager): void;
}