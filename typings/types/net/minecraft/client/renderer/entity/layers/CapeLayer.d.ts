import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { HumanoidModel } from '../../../../../../net/minecraft/client/model/HumanoidModel.d.ts'
import type { EntityModelSet } from '../../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { PlayerModel } from '../../../../../../net/minecraft/client/model/player/PlayerModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { AvatarRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/AvatarRenderState.d.ts'
import type { EquipmentAssetManager } from '../../../../../../net/minecraft/client/resources/model/EquipmentAssetManager.d.ts'
import type { EquipmentClientInfo$LayerType } from '../../../../../../net/minecraft/client/resources/model/EquipmentClientInfo$LayerType.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class CapeLayer extends RenderLayer<AvatarRenderState, PlayerModel> {
    constructor(renderer: RenderLayerParent<AvatarRenderState, PlayerModel>, modelSet: EntityModelSet, equipmentAssets: EquipmentAssetManager)
    // private equipmentAssets: EquipmentAssetManager;
    // private model: HumanoidModel<AvatarRenderState>;
    // private hasLayer(itemStack: ItemStack, layerType: EquipmentClientInfo$LayerType): boolean;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: AvatarRenderState, yRot: number, xRot: number): void;
}