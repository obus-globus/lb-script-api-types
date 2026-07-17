import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LithiumExplosion } from '../../../../net/caffeinemc/mods/lithium/common/explosion/LithiumExplosion.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Explosion } from '../../../../net/minecraft/world/level/Explosion.d.ts'
import type { Explosion$BlockInteraction } from '../../../../net/minecraft/world/level/Explosion$BlockInteraction.d.ts'
import type { ExplosionDamageCalculator } from '../../../../net/minecraft/world/level/ExplosionDamageCalculator.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkAccess } from '../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ServerExplosion extends Object implements LithiumExplosion, Explosion {
    static getSeenPercent(paramcenter: Vec3, paramentity: Entity): number;
    constructor(level: ServerLevel, source: Entity, damageSource: DamageSource, damageCalculator: ExplosionDamageCalculator, center: Vec3, radius: number, fire: boolean, blockInteraction: Explosion$BlockInteraction)
    readonly blockInteraction: Explosion$BlockInteraction;
    // private bottomY: number;
    // private cachedPos: BlockPos$MutableBlockPos;
    // private center: Vec3;
    // private damageCalculator: ExplosionDamageCalculator;
    readonly damageSource: DamageSource;
    // private directMappedResistances: number[];
    // private directMappedStates: BlockState[];
    // private directMappedTags: number[];
    // private explodedAirPositions: (Object | null)[];
    // private fire: boolean;
    readonly hitPlayers: JavaMap<Player, Vec3>;
    // private level: ServerLevel;
    // private prevChunk: ChunkAccess;
    // private prevChunkX: number;
    // private prevChunkZ: number;
    // private radius: number;
    // private skipAirBlocks: number;
    // private source: Entity;
    // private topY: number;
    // private cacheBlock(arg0: number, arg1: BlockState, arg2: number): void;
    // private calculateExplodedPositions(): BlockPos[];
    canTriggerBlocks(): boolean;
    center(): Vec3;
    // private createFire(targetBlocks: BlockPos[]): void;
    explode(): number;
    getBlockInteraction(): Explosion$BlockInteraction;
    // private getCacheHitIndex(arg0: number): number;
    getDamageSource(): DamageSource;
    getDirectSourceEntity(): Entity;
    getHitPlayers(): JavaMap<Player, Vec3>;
    getIndirectSourceEntity(): LivingEntity;
    // private hurtEntities(): void;
    // private initCaches(): void;
    // private interactWithBlocks(targetBlocks: BlockPos[]): void;
    // private interactsWithBlocks(): boolean;
    isSmall(): boolean;
    level(): ServerLevel;
    lithium$isSkippingAir(): boolean;
    lithium$setSkipAir(): void;
    lithium$setSkipAirWithoutCounting(): void;
    // private makeDamageCalculator(source: Entity): ExplosionDamageCalculator;
    // private performRayCast(arg0: RandomSource, arg1: number, arg2: number, arg3: number, arg4: (Object | null)[]): void;
    radius(): number;
    shouldAffectBlocklikeEntities(): boolean;
    // private traverseBlock(arg0: number, arg1: number, arg2: number, arg3: number, arg4: (Object | null)[]): number;
    // private tryMarkBlockForDestruction(arg0: number, arg1: number, arg2: number, arg3: BlockState, arg4: number, arg5: number, arg6: number, arg7: (Object | null)[]): void;
}