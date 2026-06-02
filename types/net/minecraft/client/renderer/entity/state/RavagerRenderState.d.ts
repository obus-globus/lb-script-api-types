import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
export class RavagerRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    attackTicksRemaining: number;
    roarAnimation: number;
    stunnedTicksRemaining: number;
}