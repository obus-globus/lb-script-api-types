import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { VertexConsumer } from '../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { OutlineBufferSource } from '../../../../../net/minecraft/client/renderer/OutlineBufferSource.d.ts'
import type { SubmitNodeCollection } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollection.d.ts'
import type { SubmitNodeStorage$ModelSubmit } from '../../../../../net/minecraft/client/renderer/SubmitNodeStorage$ModelSubmit.d.ts'
import type { SubmitNodeStorage$TranslucentModelSubmit } from '../../../../../net/minecraft/client/renderer/SubmitNodeStorage$TranslucentModelSubmit.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export class ModelFeatureRenderer extends Object {
    constructor()
    // private poseStack: PoseStack;
    // private renderBatch(bufferSource: MultiBufferSource$BufferSource, outlineBufferSource: OutlineBufferSource, map: Map<RenderType, SubmitNodeStorage$ModelSubmit<Object>[]>, crumblingBufferSource: MultiBufferSource$BufferSource): void;
    // private renderModel(submit: SubmitNodeStorage$ModelSubmit<S>, renderType: RenderType, buffer: VertexConsumer, outlineBufferSource: OutlineBufferSource, crumblingBufferSource: MultiBufferSource$BufferSource): void;
    renderSolid(nodeCollection: SubmitNodeCollection, bufferSource: MultiBufferSource$BufferSource, outlineBufferSource: OutlineBufferSource, crumblingBufferSource: MultiBufferSource$BufferSource): void;
    renderTranslucent(nodeCollection: SubmitNodeCollection, bufferSource: MultiBufferSource$BufferSource, outlineBufferSource: OutlineBufferSource, crumblingBufferSource: MultiBufferSource$BufferSource): void;
    // private renderTranslucents(bufferSource: MultiBufferSource$BufferSource, outlineBufferSource: OutlineBufferSource, submits: SubmitNodeStorage$TranslucentModelSubmit<Object>[], crumblingBufferSource: MultiBufferSource$BufferSource): void;
}