import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { DamageSource } from '../../../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { EndCrystal } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/EndCrystal.d.ts'
import type { EnderDragon } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/EnderDragon.d.ts'
import type { AbstractDragonPhaseInstance } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/phases/AbstractDragonPhaseInstance.d.ts'
import type { EnderDragonPhase } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/phases/EnderDragonPhase.d.ts'
import type { Player } from '../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Path } from '../../../../../../../net/minecraft/world/level/pathfinder/Path.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class DragonHoldingPatternPhase extends AbstractDragonPhaseInstance {
    constructor(dragon: EnderDragon)
    // private clockwise: boolean;
    // private currentPath: Path;
    // private targetLocation: Vec3;
    begin(): void;
    doServerTick(level: ServerLevel): void;
    // private findNewTarget(level: ServerLevel): void;
    getFlyTargetLocation(): Vec3;
    getPhase(): EnderDragonPhase<DragonHoldingPatternPhase>;
    // private navigateToNextPathNode(): void;
    onCrystalDestroyed(crystal: EndCrystal, pos: BlockPos, source: DamageSource, player: Player): void;
    // private strafePlayer(playerNearestToEgg: Player): void;
}