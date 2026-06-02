import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { DamageSource } from '../../../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { EndCrystal } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/EndCrystal.d.ts'
import type { EnderDragon } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/EnderDragon.d.ts'
import type { DragonPhaseInstance } from '../../../../../../../net/minecraft/world/entity/boss/enderdragon/phases/DragonPhaseInstance.d.ts'
import type { Player } from '../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export abstract class AbstractDragonPhaseInstance extends Object implements DragonPhaseInstance {
    constructor(dragon: EnderDragon)
    // private dragon: EnderDragon;
    begin(): void;
    doClientTick(): void;
    doServerTick(level: ServerLevel): void;
    end(): void;
    getFlySpeed(): number;
    getFlyTargetLocation(): Vec3;
    getTurnSpeed(): number;
    isSitting(): boolean;
    onCrystalDestroyed(crystal: EndCrystal, pos: BlockPos, source: DamageSource, player: Player): void;
    onHurt(source: DamageSource, damage: number): number;
}