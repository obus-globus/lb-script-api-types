import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { MobCategory } from '../../../../../../net/minecraft/world/entity/MobCategory.d.ts'
import type { GenerationStep$Decoration } from '../../../../../../net/minecraft/world/level/levelgen/GenerationStep$Decoration.d.ts'
import type { StructureSpawnOverride } from '../../../../../../net/minecraft/world/level/levelgen/structure/StructureSpawnOverride.d.ts'
import type { TerrainAdjustment } from '../../../../../../net/minecraft/world/level/levelgen/structure/TerrainAdjustment.d.ts'
export class Structure$StructureSettings extends Record {
    static CODEC: MapCodec<Structure$StructureSettings>;
    constructor(biomes: Holder<T>[])
    constructor(biomes: Holder<T>[], spawnOverrides: { [key in MobCategory]: StructureSpawnOverride }, step: GenerationStep$Decoration, terrainAdaptation: TerrainAdjustment)
    // private biomes: Holder<T>[];
    // private spawnOverrides: { [key in MobCategory]: StructureSpawnOverride };
    // private step: GenerationStep$Decoration;
    // private terrainAdaptation: TerrainAdjustment;
    biomes(): Holder<T>[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    spawnOverrides(): { [key in MobCategory]: StructureSpawnOverride };
    step(): GenerationStep$Decoration;
    terrainAdaptation(): TerrainAdjustment;
    toString(): string;
}