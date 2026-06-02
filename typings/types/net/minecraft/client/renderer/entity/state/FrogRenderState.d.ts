import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { AnimationState } from '../../../../../../net/minecraft/world/entity/AnimationState.d.ts'
export class FrogRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    croakAnimationState: AnimationState;
    isSwimming: boolean;
    jumpAnimationState: AnimationState;
    swimIdleAnimationState: AnimationState;
    texture: Identifier;
    tongueAnimationState: AnimationState;
}