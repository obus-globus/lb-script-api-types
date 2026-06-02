import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { EnderDragon } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/EnderDragon.d.ts'
import type { AbstractDragonPhaseInstance } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/phases/AbstractDragonPhaseInstance.d.ts'
import type { EnderDragonPhase } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/phases/EnderDragonPhase.d.ts'
import type { Path } from '../../../../../../../net/minecraft/world/level/pathfinder/Path.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class DragonStrafePlayerPhase extends AbstractDragonPhaseInstance {
    constructor(dragon: EnderDragon)
    // private attackTarget: LivingEntity;
    // private currentPath: Path;
    // private fireballCharge: number;
    // private holdingPatternClockwise: boolean;
    // private targetLocation: Vec3;
    begin(): void;
    doServerTick(level: ServerLevel): void;
    // private findNewTarget(): void;
    getFlyTargetLocation(): Vec3;
    getPhase(): EnderDragonPhase<DragonStrafePlayerPhase>;
    // private navigateToNextPathNode(): void;
    setTarget(target: LivingEntity): void;
}