import type { HumanoidModel$ArmPose } from '../../../../../../net/minecraft/client/model/HumanoidModel$ArmPose.d.ts'
import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { ItemStackRenderState } from '../../../../../../net/minecraft/client/renderer/item/ItemStackRenderState.d.ts'
import type { HumanoidArm } from '../../../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { SwingAnimationType } from '../../../../../../net/minecraft/world/item/SwingAnimationType.d.ts'
export class ArmedEntityRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    static extractArmedEntityRenderState(paramentity: LivingEntity, paramstate: ArmedEntityRenderState, paramitemModelResolver: ItemModelResolver, parampartialTicks: number): void;
    constructor()
    attackArm: HumanoidArm;
    attackTime: number;
    leftArmPose: HumanoidModel$ArmPose;
    leftHandItemStack: ItemStack;
    leftHandItemState: ItemStackRenderState;
    mainArm: HumanoidArm;
    rightArmPose: HumanoidModel$ArmPose;
    rightHandItemStack: ItemStack;
    rightHandItemState: ItemStackRenderState;
    swingAnimationType: SwingAnimationType;
    getMainHandItemStack(): ItemStack;
    getMainHandItemState(): ItemStackRenderState;
    getUseItemStackForArm(arm: HumanoidArm): ItemStack;
    ticksUsingItem(arm: HumanoidArm): number;
}