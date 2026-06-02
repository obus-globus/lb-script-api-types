import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { EquipmentLayerRenderer } from '../../../../../../net/minecraft/client/renderer/entity/layers/EquipmentLayerRenderer.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { EquipmentClientInfo$LayerType } from '../../../../../../net/minecraft/client/resources/model/EquipmentClientInfo$LayerType.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class SimpleEquipmentLayer<S extends LivingEntityRenderState, RM extends EntityModel<S>, EM extends EntityModel<S>> extends RenderLayer<S, RM> {
    constructor(renderer: RenderLayerParent<S, RM>, equipmentRenderer: EquipmentLayerRenderer, layer: EquipmentClientInfo$LayerType, itemGetter: (param0: S) => ItemStack, adultModel: EM, babyModel: EM)
    constructor(renderer: RenderLayerParent<S, RM>, equipmentRenderer: EquipmentLayerRenderer, layer: EquipmentClientInfo$LayerType, itemGetter: (param0: S) => ItemStack, adultModel: EM, babyModel: EM, order: number)
    // private adultModel: EM;
    // private babyModel: EM;
    // private equipmentRenderer: EquipmentLayerRenderer;
    // private itemGetter: (param0: S) => ItemStack;
    // private layer: EquipmentClientInfo$LayerType;
    // private order: number;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: S, yRot: number, xRot: number): void;
}