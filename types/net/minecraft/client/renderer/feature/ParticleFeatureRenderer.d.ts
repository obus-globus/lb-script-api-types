import type { RenderPass } from '../../../../../com/mojang/blaze3d/systems/RenderPass.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { WorldRenderingPhase } from '../../../../../net/irisshaders/iris/pipeline/WorldRenderingPhase.d.ts'
import type { SubmitNodeCollection } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollection.d.ts'
import type { ParticleFeatureRenderer$ParticleBufferCache } from '../../../../../net/minecraft/client/renderer/feature/ParticleFeatureRenderer$ParticleBufferCache.d.ts'
export class ParticleFeatureRenderer extends Object implements AutoCloseable {
    constructor()
    // private availableBuffers: ParticleFeatureRenderer$ParticleBufferCache[];
    // private lastPhase: WorldRenderingPhase;
    // private usedBuffers: ParticleFeatureRenderer$ParticleBufferCache[];
    close(): void;
    endFrame(): void;
    // private prepareRenderPass(renderPass: RenderPass): void;
    // private render(nodeCollection: SubmitNodeCollection, translucent: boolean): void;
    renderSolid(nodeCollection: SubmitNodeCollection): void;
    renderTranslucent(nodeCollection: SubmitNodeCollection): void;
}