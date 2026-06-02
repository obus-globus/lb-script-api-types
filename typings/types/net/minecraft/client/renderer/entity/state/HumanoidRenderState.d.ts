import type { ArmedEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/ArmedEntityRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { InteractionHand } from '../../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { HumanoidArm } from '../../../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class HumanoidRenderState extends ArmedEntityRenderState {
    static NO_OUTLINE: number;
    static extractArmedEntityRenderState(paramentity: LivingEntity, paramstate: ArmedEntityRenderState, paramitemModelResolver: ItemModelResolver, parampartialTicks: number): void;
    constructor()
    chestEquipment: ItemStack;
    elytraRotX: number;
    elytraRotY: number;
    elytraRotZ: number;
    feetEquipment: ItemStack;
    headEquipment: ItemStack;
    isCrouching: boolean;
    isFallFlying: boolean;
    isPassenger: boolean;
    isUsingItem: boolean;
    isVisuallySwimming: boolean;
    legsEquipment: ItemStack;
    maxCrossbowChargeDuration: number;
    speedValue: number;
    swimAmount: number;
    ticksUsingItem: number;
    useItemHand: InteractionHand;
    ticksUsingItem(arm: HumanoidArm): number;
}