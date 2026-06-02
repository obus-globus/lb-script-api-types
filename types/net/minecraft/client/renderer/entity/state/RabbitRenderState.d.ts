import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { AnimationState } from '../../../../../../net/minecraft/world/entity/AnimationState.d.ts'
import type { Rabbit$Variant } from '../../../../../../net/minecraft/world/entity/animal/rabbit/Rabbit$Variant.d.ts'
export class RabbitRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    hopAnimationState: AnimationState;
    idleHeadTiltAnimationState: AnimationState;
    isToast: boolean;
    jumpCompletion: number;
    variant: Rabbit$Variant;
}