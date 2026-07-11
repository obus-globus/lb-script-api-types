import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ItemLike } from '../../../../../../net/minecraft/world/level/ItemLike.d.ts'
import type { Biome } from '../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { FlatLayerInfo } from '../../../../../../net/minecraft/world/level/levelgen/flat/FlatLayerInfo.d.ts'
import type { FlatLevelGeneratorPreset } from '../../../../../../net/minecraft/world/level/levelgen/flat/FlatLevelGeneratorPreset.d.ts'
import type { StructureSet } from '../../../../../../net/minecraft/world/level/levelgen/structure/StructureSet.d.ts'
export class FlatLevelGeneratorPresets$Bootstrap extends Object {
    private constructor(context: BootstrapContext<FlatLevelGeneratorPreset>)
    // private context: BootstrapContext<FlatLevelGeneratorPreset>;
    // private register(key: ResourceKey<FlatLevelGeneratorPreset>, icon: ItemLike, biome: ResourceKey<Biome>, structures: ResourceKey<StructureSet>[], decoration: boolean, addLakes: boolean, ...layers: FlatLayerInfo[]): void;
    run(): void;
}