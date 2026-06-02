import type { EntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { DragonFlightHistory } from '../../../../../../net/minecraft/world/entity/boss/enderdragon/DragonFlightHistory.d.ts'
import type { DragonFlightHistory$Sample } from '../../../../../../net/minecraft/world/entity/boss/enderdragon/DragonFlightHistory$Sample.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EnderDragonRenderState extends EntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    beamOffset: Vec3;
    deathTime: number;
    distanceToEgg: number;
    flapTime: number;
    flightHistory: DragonFlightHistory;
    hasRedOverlay: boolean;
    isLandingOrTakingOff: boolean;
    isSitting: boolean;
    partialTicks: number;
    getHeadPartYOffset(part: number, bodyPos: DragonFlightHistory$Sample, partPos: DragonFlightHistory$Sample): number;
    getHistoricalPos(delay: number): DragonFlightHistory$Sample;
}