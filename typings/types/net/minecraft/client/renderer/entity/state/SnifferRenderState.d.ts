import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { AnimationState } from '../../../../../../net/minecraft/world/entity/AnimationState.d.ts'
export class SnifferRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    diggingAnimationState: AnimationState;
    feelingHappyAnimationState: AnimationState;
    isSearching: boolean;
    risingAnimationState: AnimationState;
    scentingAnimationState: AnimationState;
    sniffingAnimationState: AnimationState;
}