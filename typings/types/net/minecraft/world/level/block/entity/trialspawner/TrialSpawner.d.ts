import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ParticleOptions } from '../../../../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { SimpleParticleType } from '../../../../../../../net/minecraft/core/particles/SimpleParticleType.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { EntityType } from '../../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
import type { PlayerDetector } from '../../../../../../../net/minecraft/world/level/block/entity/trialspawner/PlayerDetector.d.ts'
import type { PlayerDetector$EntitySelector } from '../../../../../../../net/minecraft/world/level/block/entity/trialspawner/PlayerDetector$EntitySelector.d.ts'
import type { TrialSpawner$FullConfig } from '../../../../../../../net/minecraft/world/level/block/entity/trialspawner/TrialSpawner$FullConfig.d.ts'
import type { TrialSpawner$StateAccessor } from '../../../../../../../net/minecraft/world/level/block/entity/trialspawner/TrialSpawner$StateAccessor.d.ts'
import type { TrialSpawnerConfig } from '../../../../../../../net/minecraft/world/level/block/entity/trialspawner/TrialSpawnerConfig.d.ts'
import type { TrialSpawnerState } from '../../../../../../../net/minecraft/world/level/block/entity/trialspawner/TrialSpawnerState.d.ts'
import type { TrialSpawnerStateData } from '../../../../../../../net/minecraft/world/level/block/entity/trialspawner/TrialSpawnerStateData.d.ts'
import type { ValueInput } from '../../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { LootTable } from '../../../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
export class TrialSpawner extends Object {
    static DETECT_PLAYER_SPAWN_BUFFER: number;
    static addBecomeOminousParticles(paramlevel: Level, parampos: BlockPos, paramrandom: RandomSource): void;
    static addDetectPlayerParticles(paramlevel: Level, parampos: BlockPos, paramrandom: RandomSource, paramdata: number, paramtype: ParticleOptions): void;
    static addEjectItemParticles(paramlevel: Level, parampos: BlockPos, paramrandom: RandomSource): void;
    static addSpawnParticles(paramlevel: Level, parampos: BlockPos, paramrandom: RandomSource, paramparticleType: SimpleParticleType): void;
    constructor(config: TrialSpawner$FullConfig, stateAccessor: TrialSpawner$StateAccessor, playerDetector: PlayerDetector, entitySelector: PlayerDetector$EntitySelector)
    // private config: TrialSpawner$FullConfig;
    // private data: TrialSpawnerStateData;
    readonly entitySelector: PlayerDetector$EntitySelector;
    // private isOminous: boolean;
    // private overridePeacefulAndMobSpawnRule: boolean;
    readonly playerDetector: PlayerDetector;
    // private stateAccessor: TrialSpawner$StateAccessor;
    activeConfig(): TrialSpawnerConfig;
    applyOminous(level: ServerLevel, spawnerPos: BlockPos): void;
    canSpawnInLevel(level: ServerLevel): boolean;
    ejectReward(level: ServerLevel, pos: BlockPos, ejectingLootTable: ResourceKey<LootTable>): void;
    getEntitySelector(): PlayerDetector$EntitySelector;
    getPlayerDetector(): PlayerDetector;
    getRequiredPlayerRange(): number;
    getState(): TrialSpawnerState;
    getStateData(): TrialSpawnerStateData;
    getTargetCooldownLength(): number;
    isOminous(): boolean;
    load(input: ValueInput): void;
    markUpdated(): void;
    normalConfig(): TrialSpawnerConfig;
    ominousConfig(): TrialSpawnerConfig;
    overrideEntityToSpawn(type: EntityType<any>, level: Level): void;
    overridePeacefulAndMobSpawnRule(): void;
    removeOminous(level: ServerLevel, spawnerPos: BlockPos): void;
    setPlayerDetector(playerDetector: PlayerDetector): void;
    setState(level: Level, state: TrialSpawnerState): void;
    spawnMob(level: ServerLevel, spawnerPos: BlockPos): Optional<UUID>;
    store(output: ValueOutput): void;
    tickClient(level: Level, spawnerPos: BlockPos, isOminous: boolean): void;
    tickServer(serverLevel: ServerLevel, spawnerPos: BlockPos, isOminous: boolean): void;
}