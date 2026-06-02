import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { AnimationState } from '../../../../../../net/minecraft/world/entity/AnimationState.d.ts'
export class WardenRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    attackAnimationState: AnimationState;
    diggingAnimationState: AnimationState;
    emergeAnimationState: AnimationState;
    heartAnimation: number;
    roarAnimationState: AnimationState;
    sniffAnimationState: AnimationState;
    sonicBoomAnimationState: AnimationState;
    tendrilAnimation: number;
}