import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { AreaEffectCloud } from '../../../../../../../net/minecraft/world/entity/AreaEffectCloud.d.ts'
import type { EnderDragon } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/EnderDragon.d.ts'
import type { AbstractDragonSittingPhase } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/phases/AbstractDragonSittingPhase.d.ts'
import type { EnderDragonPhase } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/phases/EnderDragonPhase.d.ts'
export class DragonSittingFlamingPhase extends AbstractDragonSittingPhase {
    constructor(dragon: EnderDragon)
    // private flame: AreaEffectCloud;
    // private flameCount: number;
    // private flameTicks: number;
    begin(): void;
    doClientTick(): void;
    doServerTick(level: ServerLevel): void;
    end(): void;
    getPhase(): EnderDragonPhase<DragonSittingFlamingPhase>;
    resetFlameCount(): void;
}