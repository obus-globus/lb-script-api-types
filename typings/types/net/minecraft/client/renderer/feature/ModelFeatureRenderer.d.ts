import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FeatureFrameContext } from '../../../../../net/minecraft/client/renderer/feature/FeatureFrameContext.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { ModelFeatureRenderer$Submit } from '../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$Submit.d.ts'
import type { RenderTypeFeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/RenderTypeFeatureRenderer.d.ts'
export class ModelFeatureRenderer extends RenderTypeFeatureRenderer<ModelFeatureRenderer$Submit<Object>> {
    static TYPE: FeatureRendererType<ModelFeatureRenderer$Submit<Object>>;
    constructor()
    // private poseStack: PoseStack;
    buildGroup(context: FeatureFrameContext, submits: ModelFeatureRenderer$Submit<Object>[]): void;
    // private prepareModel<S extends unknown>(submit: ModelFeatureRenderer$Submit<S>): void;
    // private prepareModel$mixinextras$wrapped$5(arg0: ModelFeatureRenderer$Submit<Object>): void;
}