import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { LlamaModel } from '../../../../../../net/minecraft/client/model/animal/llama/LlamaModel.d.ts'
import type { EntityModelSet } from '../../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { EquipmentLayerRenderer } from '../../../../../../net/minecraft/client/renderer/entity/layers/EquipmentLayerRenderer.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { LlamaRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LlamaRenderState.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { EquipmentAsset } from '../../../../../../net/minecraft/world/item/equipment/EquipmentAsset.d.ts'
export class LlamaDecorLayer extends RenderLayer<LlamaRenderState, LlamaModel> {
    constructor(renderer: RenderLayerParent<LlamaRenderState, LlamaModel>, modelSet: EntityModelSet, equipmentRenderer: EquipmentLayerRenderer)
    // private adultModel: LlamaModel;
    // private babyModel: LlamaModel;
    // private equipmentRenderer: EquipmentLayerRenderer;
    // private renderEquipment(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, state: LlamaRenderState, itemStack: ItemStack, equipmentAssetId: ResourceKey<EquipmentAsset>, lightCoords: number): void;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: LlamaRenderState, yRot: number, xRot: number): void;
}