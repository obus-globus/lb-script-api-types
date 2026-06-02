import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { AnimationState } from '../../../../../../net/minecraft/world/entity/AnimationState.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class CamelRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    dashAnimationState: AnimationState;
    idleAnimationState: AnimationState;
    isRidden: boolean;
    jumpCooldown: number;
    saddle: ItemStack;
    sitAnimationState: AnimationState;
    sitPoseAnimationState: AnimationState;
    sitUpAnimationState: AnimationState;
}