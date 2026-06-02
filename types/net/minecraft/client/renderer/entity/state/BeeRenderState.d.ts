import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
export class BeeRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    hasNectar: boolean;
    hasStinger: boolean;
    isAngry: boolean;
    isOnGround: boolean;
    rollAmount: number;
}