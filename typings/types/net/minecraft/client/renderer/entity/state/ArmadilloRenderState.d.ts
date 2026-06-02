import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { AnimationState } from '../../../../../../net/minecraft/world/entity/AnimationState.d.ts'
export class ArmadilloRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    isHidingInShell: boolean;
    peekAnimationState: AnimationState;
    rollOutAnimationState: AnimationState;
    rollUpAnimationState: AnimationState;
}