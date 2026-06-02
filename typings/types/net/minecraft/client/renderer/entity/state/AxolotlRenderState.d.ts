import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { AnimationState } from '../../../../../../net/minecraft/world/entity/AnimationState.d.ts'
import type { Axolotl$Variant } from '../../../../../../net/minecraft/world/entity/animal/axolotl/Axolotl$Variant.d.ts'
export class AxolotlRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    idleOnGroundAnimationState: AnimationState;
    idleUnderWaterAnimationState: AnimationState;
    idleUnderWaterOnGroundAnimationState: AnimationState;
    inWaterFactor: number;
    movingFactor: number;
    onGroundFactor: number;
    playDeadAnimationState: AnimationState;
    playingDeadFactor: number;
    swimAnimation: AnimationState;
    variant: Axolotl$Variant;
    walkAnimationState: AnimationState;
    walkUnderWaterAnimationState: AnimationState;
}