import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { HolderGetter } from '../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { DataComponentPatch } from '../../../../../net/minecraft/core/component/DataComponentPatch.d.ts'
import type { ServerBossEvent } from '../../../../../net/minecraft/server/level/ServerBossEvent.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Difficulty } from '../../../../../net/minecraft/world/Difficulty.d.ts'
import type { DifficultyInstance } from '../../../../../net/minecraft/world/DifficultyInstance.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { SpawnPlacementType } from '../../../../../net/minecraft/world/entity/SpawnPlacementType.d.ts'
import type { Raid$RaidStatus } from '../../../../../net/minecraft/world/entity/raid/Raid$RaidStatus.d.ts'
import type { Raid$RaiderType } from '../../../../../net/minecraft/world/entity/raid/Raid$RaiderType.d.ts'
import type { Raider } from '../../../../../net/minecraft/world/entity/raid/Raider.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemStackTemplate } from '../../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { BannerPattern } from '../../../../../net/minecraft/world/level/block/entity/BannerPattern.d.ts'
export class Raid extends Object {
    static DEFAULT_MAX_RAID_OMEN_LEVEL: number;
    static MAP_CODEC: MapCodec<Raid>;
    static MAX_CELEBRATION_TICKS: number;
    static MAX_NO_ACTION_TIME: number;
    static RAID_REMOVAL_THRESHOLD_SQR: number;
    static RAVAGER_SPAWN_PLACEMENT_TYPE: SpawnPlacementType;
    static VALID_RAID_RADIUS_SQR: number;
    static VILLAGE_RADIUS_BUFFER: number;
    static getBannerComponentPatch(parampatternGetter: HolderGetter<BannerPattern>): DataComponentPatch;
    static getOminousBannerInstance(parampatternGetter: HolderGetter<BannerPattern>): ItemStack;
    static getOminousBannerTemplate(parampatternGetter: HolderGetter<BannerPattern>): ItemStackTemplate;
    private constructor(started: boolean, active: boolean, ticksActive: number, raidOmenLevel: number, groupsSpawned: number, raidCooldownTicks: number, postRaidTicks: number, totalHealth: number, numGroups: number, status: Raid$RaidStatus, center: BlockPos, heroesOfTheVillage: UUID[])
    constructor(center: BlockPos, difficulty: Difficulty)
    readonly active: boolean;
    // private celebrationTicks: number;
    readonly center: BlockPos;
    // private groupRaiderMap: { [key: number]: Raider[] };
    // private groupToLeaderMap: { [key: number]: Raider };
    readonly groupsSpawned: number;
    // private heroesOfTheVillage: UUID[];
    // private isBarDirty: boolean;
    // private numGroups: number;
    // private postRaidTicks: number;
    // private raidCooldownTicks: number;
    // private raidEvent: ServerBossEvent;
    readonly raidOmenLevel: number;
    // private random: RandomSource;
    readonly started: boolean;
    // private status: Raid$RaidStatus;
    // private ticksActive: number;
    readonly totalHealth: number;
    // private waveSpawnPos: Optional<BlockPos>;
    absorbRaidOmen(player: ServerPlayer): boolean;
    addHeroOfTheVillage(killer: Entity): void;
    // private addWaveMob(level: ServerLevel, wave: number, raider: Raider): boolean;
    addWaveMob(level: ServerLevel, wave: number, raider: Raider, updateHealth: boolean): boolean;
    // private findRandomSpawnPos(level: ServerLevel, maxTries: number): BlockPos;
    getAllRaiders(): Raider[];
    getCenter(): BlockPos;
    // private getDefaultNumSpawns(type: Raid$RaiderType, wav: number, isBonusWave: boolean): number;
    getEnchantOdds(): number;
    getGroupsSpawned(): number;
    getHealthOfLivingRaiders(): number;
    getLeader(wave: number): Raider;
    getMaxRaidOmenLevel(): number;
    getNumGroups(difficulty: Difficulty): number;
    // private getPotentialBonusSpawns(type: Raid$RaiderType, random: RandomSource, wav: number, difficultyInstance: DifficultyInstance, isBonusWave: boolean): number;
    getRaidOmenLevel(): number;
    getTotalHealth(): number;
    getTotalRaidersAlive(): number;
    // private getValidSpawnPos(level: ServerLevel): Optional<BlockPos>;
    // private hasBonusWave(): boolean;
    hasFirstWaveSpawned(): boolean;
    // private hasMoreWaves(): boolean;
    // private hasSpawnedBonusWave(): boolean;
    isActive(): boolean;
    isBetweenWaves(): boolean;
    // private isFinalWave(): boolean;
    isLoss(): boolean;
    isOver(): boolean;
    isStarted(): boolean;
    isStopped(): boolean;
    isVictory(): boolean;
    joinRaid(level: ServerLevel, groupNumber: number, raider: Raider, pos: BlockPos, exists: boolean): void;
    // private moveRaidCenterToNearbyVillageSection(level: ServerLevel): void;
    // private playSound(level: ServerLevel, soundOrigin: BlockPos): void;
    removeFromRaid(level: ServerLevel, raider: Raider, removeFromTotalHealth: boolean): void;
    removeLeader(wave: number): void;
    // private setCenter(center: BlockPos): void;
    // private setDirty(level: ServerLevel): void;
    setLeader(wave: number, raider: Raider): void;
    setRaidOmenLevel(raidOmenLevel: number): void;
    // private shouldSpawnBonusGroup(): boolean;
    // private shouldSpawnGroup(): boolean;
    // private spawnGroup(level: ServerLevel, pos: BlockPos): void;
    stop(): void;
    tick(level: ServerLevel): void;
    updateBossbar(): void;
    // private updatePlayers(level: ServerLevel): void;
    // private updateRaiders(level: ServerLevel): void;
    // private validPlayer(): (param0: ServerPlayer) => kotlin.Boolean;
}