import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Model } from '../../../../../../net/minecraft/client/model/Model.d.ts'
import type { WolfModel } from '../../../../../../net/minecraft/client/model/animal/wolf/WolfModel.d.ts'
import type { EntityModelSet } from '../../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { EquipmentLayerRenderer } from '../../../../../../net/minecraft/client/renderer/entity/layers/EquipmentLayerRenderer.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { WolfRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/WolfRenderState.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class WolfArmorLayer extends RenderLayer<WolfRenderState, WolfModel> {
    constructor(renderer: RenderLayerParent<WolfRenderState, WolfModel>, modelSet: EntityModelSet, equipmentRenderer: EquipmentLayerRenderer)
    // private adultModel: WolfModel;
    // private equipmentRenderer: EquipmentLayerRenderer;
    // private maybeRenderCracks(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, armorItem: ItemStack, model: Model<WolfRenderState>, state: WolfRenderState): void;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: WolfRenderState, yRot: number, xRot: number): void;
}