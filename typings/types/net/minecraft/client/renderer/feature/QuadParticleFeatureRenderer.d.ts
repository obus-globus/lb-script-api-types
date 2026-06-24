import type { GpuBufferSlice } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { WorldRenderingPhase } from '../../../../../net/irisshaders/iris/pipeline/WorldRenderingPhase.d.ts'
import type { FeatureFrameContext } from '../../../../../net/minecraft/client/renderer/feature/FeatureFrameContext.d.ts'
import type { FeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/FeatureRenderer.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { QuadParticleFeatureRenderer$PreparedGroup } from '../../../../../net/minecraft/client/renderer/feature/QuadParticleFeatureRenderer$PreparedGroup.d.ts'
import type { QuadParticleFeatureRenderer$Submit } from '../../../../../net/minecraft/client/renderer/feature/QuadParticleFeatureRenderer$Submit.d.ts'
export class QuadParticleFeatureRenderer extends Object implements FeatureRenderer<QuadParticleFeatureRenderer$Submit> {
    static TYPE: FeatureRendererType<QuadParticleFeatureRenderer$Submit>;
    constructor()
    // private dynamicTransforms: GpuBufferSlice;
    // private groups: QuadParticleFeatureRenderer$PreparedGroup[];
    // private lastPhase: WorldRenderingPhase;
    beginPrepare(context: FeatureFrameContext): void;
    close(): void;
    executeGroup(context: FeatureFrameContext, groupIndex: number, submits: QuadParticleFeatureRenderer$Submit[], strictlyOrdered: boolean): void;
    finishExecute(context: FeatureFrameContext): void;
    finishPrepare(context: FeatureFrameContext): void;
    prepareGroup(context: FeatureFrameContext, submits: QuadParticleFeatureRenderer$Submit[], strictlyOrdered: boolean): void;
}