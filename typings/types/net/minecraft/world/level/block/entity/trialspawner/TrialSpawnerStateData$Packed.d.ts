import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { SpawnData } from '../../../../../../../net/minecraft/world/level/SpawnData.d.ts'
import type { LootTable } from '../../../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
export class TrialSpawnerStateData$Packed extends Record {
    static MAP_CODEC: MapCodec<TrialSpawnerStateData$Packed>;
    // private cooldownEndsAt: number;
    // private currentMobs: UUID[];
    // private detectedPlayers: UUID[];
    // private ejectingLootTable: Optional<ResourceKey<LootTable>>;
    // private nextMobSpawnsAt: number;
    // private nextSpawnData: Optional<SpawnData>;
    // private totalMobsSpawned: number;
    cooldownEndsAt(): number;
    currentMobs(): UUID[];
    detectedPlayers(): UUID[];
    ejectingLootTable(): Optional<ResourceKey<LootTable>>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    nextMobSpawnsAt(): number;
    nextSpawnData(): Optional<SpawnData>;
    toString(): string;
    totalMobsSpawned(): number;
}