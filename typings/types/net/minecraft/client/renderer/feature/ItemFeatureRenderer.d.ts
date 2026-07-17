import type { PoseStack$Pose } from '../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { QuadInstance } from '../../../../../com/mojang/blaze3d/vertex/QuadInstance.d.ts'
import type { VertexConsumer } from '../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { ItemFeatureRendererAccessor } from '../../../../../net/caffeinemc/mods/sodium/mixin/frapi/ItemFeatureRendererAccessor.d.ts'
import type { FeatureFrameContext } from '../../../../../net/minecraft/client/renderer/feature/FeatureFrameContext.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { ItemFeatureRenderer$Submit } from '../../../../../net/minecraft/client/renderer/feature/ItemFeatureRenderer$Submit.d.ts'
import type { RenderTypeFeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/RenderTypeFeatureRenderer.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ItemFeatureRenderer extends RenderTypeFeatureRenderer<ItemFeatureRenderer$Submit> implements ItemFeatureRendererAccessor {
    static ENCHANTED_GLINT_ARMOR: Identifier;
    static ENCHANTED_GLINT_ITEM: Identifier;
    static NO_TINT: number;
    static TYPE: FeatureRendererType<ItemFeatureRenderer$Submit>;
    constructor()
    // private quadInstance: QuadInstance;
    buildGroup(context: FeatureFrameContext, submits: ItemFeatureRenderer$Submit[]): void;
    // private getFoilBuffer(renderType: RenderType, foilDecalPose: PoseStack$Pose): VertexConsumer;
    // private prepareFoilSubmit(submit: ItemFeatureRenderer$Submit): void;
    // private prepareMainSubmit(submit: ItemFeatureRenderer$Submit): void;
    // private prepareOutlineSubmit(submit: ItemFeatureRenderer$Submit): void;
    // private prepareSubmit(submit: ItemFeatureRenderer$Submit, foil: boolean): void;
}