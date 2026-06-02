import type { PoseStack$Pose } from '../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { QuadInstance } from '../../../../../com/mojang/blaze3d/vertex/QuadInstance.d.ts'
import type { VertexConsumer } from '../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemRenderContext } from '../../../../../net/caffeinemc/mods/sodium/client/render/frapi/render/ItemRenderContext.d.ts'
import type { ItemFeatureRendererAccessor } from '../../../../../net/caffeinemc/mods/sodium/mixin/frapi/ItemFeatureRendererAccessor.d.ts'
import type { MultiBufferSource } from '../../../../../net/minecraft/client/renderer/MultiBufferSource.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { OutlineBufferSource } from '../../../../../net/minecraft/client/renderer/OutlineBufferSource.d.ts'
import type { SubmitNodeCollection } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollection.d.ts'
import type { SubmitNodeStorage$ItemSubmit } from '../../../../../net/minecraft/client/renderer/SubmitNodeStorage$ItemSubmit.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemDisplayContext } from '../../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
export class ItemFeatureRenderer extends Object implements ItemFeatureRendererAccessor {
    static ENCHANTED_GLINT_ARMOR: Identifier;
    static ENCHANTED_GLINT_ITEM: Identifier;
    static NO_TINT: number;
    static fabric_computeFoilDecalPose(paramarg0: ItemDisplayContext, paramarg1: PoseStack$Pose): PoseStack$Pose;
    static fabric_getFoilBuffer(paramarg0: MultiBufferSource, paramarg1: RenderType, paramarg2: PoseStack$Pose): VertexConsumer;
    static getFoilBuffer(parambufferSource: MultiBufferSource, paramrenderType: RenderType, paramsheeted: boolean, paramhasFoil: boolean): VertexConsumer;
    static getFoilRenderType(parambaseRenderType: RenderType, paramsheeted: boolean): RenderType;
    constructor()
    // private itemRenderContext: ItemRenderContext;
    // private quadInstance: QuadInstance;
    // private renderItem(bufferSource: MultiBufferSource$BufferSource, outlineBufferSource: OutlineBufferSource, submit: SubmitNodeStorage$ItemSubmit): void;
    renderSolid(nodeCollection: SubmitNodeCollection, bufferSource: MultiBufferSource$BufferSource, outlineBufferSource: OutlineBufferSource): void;
    renderTranslucent(nodeCollection: SubmitNodeCollection, bufferSource: MultiBufferSource$BufferSource, outlineBufferSource: OutlineBufferSource): void;
}