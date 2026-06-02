import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { ArmedModel } from '../../../../../../net/minecraft/client/model/ArmedModel.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { ArmedEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/ArmedEntityRenderState.d.ts'
import type { ItemStackRenderState } from '../../../../../../net/minecraft/client/renderer/item/ItemStackRenderState.d.ts'
import type { HumanoidArm } from '../../../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ItemInHandLayer<S extends ArmedEntityRenderState, M extends EntityModel<S> & ArmedModel<S>> extends RenderLayer<S, M> {
    constructor(renderer: RenderLayerParent<S, M>)
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: S, yRot: number, xRot: number): void;
    submitArmWithItem(state: S, item: ItemStackRenderState, itemStack: ItemStack, arm: HumanoidArm, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number): void;
    // private useBabyOffset(state: S): boolean;
}