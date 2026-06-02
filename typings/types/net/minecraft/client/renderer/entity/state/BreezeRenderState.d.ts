import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { AnimationState } from '../../../../../../net/minecraft/world/entity/AnimationState.d.ts'
export class BreezeRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    idle: AnimationState;
    inhale: AnimationState;
    longJump: AnimationState;
    shoot: AnimationState;
    slide: AnimationState;
    slideBack: AnimationState;
}