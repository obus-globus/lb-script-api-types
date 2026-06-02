import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { EnderDragon } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/EnderDragon.d.ts'
import type { AbstractDragonPhaseInstance } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/phases/AbstractDragonPhaseInstance.d.ts'
import type { EnderDragonPhase } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/phases/EnderDragonPhase.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class DragonChargePlayerPhase extends AbstractDragonPhaseInstance {
    constructor(dragon: EnderDragon)
    // private targetLocation: Vec3;
    // private timeSinceCharge: number;
    begin(): void;
    doServerTick(level: ServerLevel): void;
    getFlySpeed(): number;
    getFlyTargetLocation(): Vec3;
    getPhase(): EnderDragonPhase<DragonChargePlayerPhase>;
    setTarget(target: Vec3): void;
}