import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { OutlineBufferSource } from '../../../../../net/minecraft/client/renderer/OutlineBufferSource.d.ts'
import type { SubmitNodeCollection } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollection.d.ts'
import type { SubmitNodeStorage$ModelPartSubmit } from '../../../../../net/minecraft/client/renderer/SubmitNodeStorage$ModelPartSubmit.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export class ModelPartFeatureRenderer extends Object {
    constructor()
    // private poseStack: PoseStack;
    // private render(modelPartSubmitsMap: Map<RenderType, SubmitNodeStorage$ModelPartSubmit[]>, bufferSource: MultiBufferSource$BufferSource, outlineBufferSource: OutlineBufferSource, crumblingBufferSource: MultiBufferSource$BufferSource): void;
    renderSolid(nodeCollection: SubmitNodeCollection, bufferSource: MultiBufferSource$BufferSource, outlineBufferSource: OutlineBufferSource, crumblingBufferSource: MultiBufferSource$BufferSource): void;
    renderTranslucent(nodeCollection: SubmitNodeCollection, bufferSource: MultiBufferSource$BufferSource, outlineBufferSource: OutlineBufferSource, crumblingBufferSource: MultiBufferSource$BufferSource): void;
}