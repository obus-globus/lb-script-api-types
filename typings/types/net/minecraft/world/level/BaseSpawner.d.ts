import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { WeightedList } from '../../../../net/minecraft/util/random/WeightedList.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityProcessor } from '../../../../net/minecraft/world/entity/EntityProcessor.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { SpawnData } from '../../../../net/minecraft/world/level/SpawnData.d.ts'
import type { ValueInput } from '../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export abstract class BaseSpawner extends Object {
    static SET_DISPLAY_ENTITY_ID: (param0: Entity) => Entity;
    static SPAWN_DATA_TAG: string;
    constructor()
    // private displayEntity: Entity;
    // private maxNearbyEntities: number;
    // private maxSpawnDelay: number;
    // private minSpawnDelay: number;
    // private nextSpawnData: SpawnData;
    // private oSpin: number;
    // private requiredPlayerRange: number;
    // private spawnCount: number;
    // private spawnDelay: number;
    // private spawnPotentials: WeightedList<SpawnData>;
    // private spawnRange: number;
    readonly spin: number;
    broadcastEvent(level: Level, pos: BlockPos, id: number): void;
    clientTick(level: Level, pos: BlockPos): void;
    // private delay(level: Level, pos: BlockPos): void;
    getOSpin(): number;
    getOrCreateDisplayEntity(level: Level, pos: BlockPos): Entity;
    // private getOrCreateNextSpawnData(level: Level, random: RandomSource, pos: BlockPos): SpawnData;
    getSpin(): number;
    // private isNearPlayer(level: Level, pos: BlockPos): boolean;
    load(level: Level, pos: BlockPos, input: ValueInput): void;
    onEventTriggered(level: Level, id: number): boolean;
    save(output: ValueOutput): void;
    serverTick(level: ServerLevel, pos: BlockPos): void;
    setEntityId(type: EntityType<any>, level: Level, random: RandomSource, pos: BlockPos): void;
    setNextSpawnData(level: Level, pos: BlockPos, nextSpawnData: SpawnData): void;
}