import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { TargetingConditions } from '../../../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions.d.ts'
import type { EnderDragon } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/EnderDragon.d.ts'
import type { AbstractDragonSittingPhase } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/phases/AbstractDragonSittingPhase.d.ts'
import type { EnderDragonPhase } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/phases/EnderDragonPhase.d.ts'
export class DragonSittingScanningPhase extends AbstractDragonSittingPhase {
    constructor(dragon: EnderDragon)
    // private scanTargeting: TargetingConditions;
    // private scanningTime: number;
    begin(): void;
    doServerTick(level: ServerLevel): void;
    getPhase(): EnderDragonPhase<DragonSittingScanningPhase>;
}