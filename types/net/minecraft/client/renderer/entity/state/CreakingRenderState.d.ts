import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { AnimationState } from '../../../../../../net/minecraft/world/entity/AnimationState.d.ts'
export class CreakingRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    attackAnimationState: AnimationState;
    canMove: boolean;
    deathAnimationState: AnimationState;
    eyesGlowing: boolean;
    invulnerabilityAnimationState: AnimationState;
}