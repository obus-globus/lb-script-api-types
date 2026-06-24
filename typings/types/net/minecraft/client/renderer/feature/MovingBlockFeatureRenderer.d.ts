import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { QuadInstance } from '../../../../../com/mojang/blaze3d/vertex/QuadInstance.d.ts'
import type { ChunkSectionLayer } from '../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { FeatureFrameContext } from '../../../../../net/minecraft/client/renderer/feature/FeatureFrameContext.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { MovingBlockFeatureRenderer$Submit } from '../../../../../net/minecraft/client/renderer/feature/MovingBlockFeatureRenderer$Submit.d.ts'
import type { RenderTypeFeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/RenderTypeFeatureRenderer.d.ts'
import type { BakedQuad } from '../../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
export class MovingBlockFeatureRenderer extends RenderTypeFeatureRenderer<MovingBlockFeatureRenderer$Submit> {
    static TYPE: FeatureRendererType<MovingBlockFeatureRenderer$Submit>;
    constructor()
    // private poseStack: PoseStack;
    buildGroup(context: FeatureFrameContext, submits: MovingBlockFeatureRenderer$Submit[]): void;
    // private putBakedQuad(poseStack: PoseStack, x: number, y: number, z: number, quad: BakedQuad, instance: QuadInstance, layer: ChunkSectionLayer, outlineColor: number): void;
}