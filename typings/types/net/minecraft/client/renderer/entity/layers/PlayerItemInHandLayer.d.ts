import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { ArmedModel } from '../../../../../../net/minecraft/client/model/ArmedModel.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { HeadedModel } from '../../../../../../net/minecraft/client/model/HeadedModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { ItemInHandLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/ItemInHandLayer.d.ts'
import type { AvatarRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/AvatarRenderState.d.ts'
import type { ItemStackRenderState } from '../../../../../../net/minecraft/client/renderer/item/ItemStackRenderState.d.ts'
import type { HumanoidArm } from '../../../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class PlayerItemInHandLayer<S extends AvatarRenderState, M extends EntityModel<S> & ArmedModel<S> & HeadedModel> extends ItemInHandLayer<S, M> {
    constructor(renderer: RenderLayerParent<S, M>)
    // private renderItemHeldToEye(state: S, arm: HumanoidArm, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number): void;
    submitArmWithItem(state: S, item: ItemStackRenderState, itemStack: ItemStack, arm: HumanoidArm, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number): void;
}