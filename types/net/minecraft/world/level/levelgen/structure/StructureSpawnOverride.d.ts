import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { WeightedList } from '../../../../../../net/minecraft/util/random/WeightedList.d.ts'
import type { MobSpawnSettings$SpawnerData } from '../../../../../../net/minecraft/world/level/biome/MobSpawnSettings$SpawnerData.d.ts'
import type { StructureSpawnOverride$BoundingBoxType } from '../../../../../../net/minecraft/world/level/levelgen/structure/StructureSpawnOverride$BoundingBoxType.d.ts'
export class StructureSpawnOverride extends Record {
    static CODEC: Codec<StructureSpawnOverride>;
    constructor(boundingBox: StructureSpawnOverride$BoundingBoxType, spawns: WeightedList<MobSpawnSettings$SpawnerData>)
    // private boundingBox: StructureSpawnOverride$BoundingBoxType;
    // private spawns: WeightedList<MobSpawnSettings$SpawnerData>;
    boundingBox(): StructureSpawnOverride$BoundingBoxType;
    equals(o: Object | null): boolean;
    hashCode(): number;
    spawns(): WeightedList<MobSpawnSettings$SpawnerData>;
    toString(): string;
}