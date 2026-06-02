import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { HumanoidModel } from '../../../../../../net/minecraft/client/model/HumanoidModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { ArmorModelSet } from '../../../../../../net/minecraft/client/renderer/entity/ArmorModelSet.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { EquipmentLayerRenderer } from '../../../../../../net/minecraft/client/renderer/entity/layers/EquipmentLayerRenderer.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { HumanoidRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/HumanoidRenderState.d.ts'
import type { EquipmentSlot } from '../../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class HumanoidArmorLayer<S extends HumanoidRenderState, M extends HumanoidModel<S>, A extends HumanoidModel<S>> extends RenderLayer<S, M> {
    static shouldRender(paramitemStack: ItemStack, paramslot: EquipmentSlot): boolean;
    constructor(renderer: RenderLayerParent<S, M>, modelSet: ArmorModelSet<A>, babyModelSet: ArmorModelSet<A>, equipmentRenderer: EquipmentLayerRenderer)
    constructor(renderer: RenderLayerParent<S, M>, modelSet: ArmorModelSet<A>, equipmentRenderer: EquipmentLayerRenderer)
    // private babyModelSet: ArmorModelSet<A>;
    // private equipmentRenderer: EquipmentLayerRenderer;
    // private humanoidRenderState: HumanoidRenderState;
    // private modelSet: ArmorModelSet<A>;
    // private getArmorModel(state: S, slot: EquipmentSlot): A;
    // private renderArmorPiece(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, itemStack: ItemStack, slot: EquipmentSlot, lightCoords: number, state: S): void;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: S, yRot: number, xRot: number): void;
    // private usesInnerModel(slot: EquipmentSlot): boolean;
}