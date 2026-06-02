import type { EntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
export class BoatRenderState extends EntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    bubbleAngle: number;
    damageTime: number;
    hurtDir: number;
    hurtTime: number;
    isUnderWater: boolean;
    rowingTimeLeft: number;
    rowingTimeRight: number;
    yRot: number;
}