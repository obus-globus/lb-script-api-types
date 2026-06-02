import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { AnimationState } from '../../../../../../net/minecraft/world/entity/AnimationState.d.ts'
export class BatRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    flyAnimationState: AnimationState;
    isResting: boolean;
    restAnimationState: AnimationState;
}