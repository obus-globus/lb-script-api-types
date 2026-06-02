import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
export class FelineRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    isCrouching: boolean;
    isSitting: boolean;
    isSprinting: boolean;
    lieDownAmount: number;
    lieDownAmountTail: number;
    relaxStateOneAmount: number;
}