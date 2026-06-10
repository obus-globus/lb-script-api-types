import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { HolderGetter } from '../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { Climate$ParameterList } from '../../../../../net/minecraft/world/level/biome/Climate$ParameterList.d.ts'
import type { MultiNoiseBiomeSourceParameterList$Preset } from '../../../../../net/minecraft/world/level/biome/MultiNoiseBiomeSourceParameterList$Preset.d.ts'
export class MultiNoiseBiomeSourceParameterList extends Object {
    static CODEC: Codec<Holder<MultiNoiseBiomeSourceParameterList>>;
    static DIRECT_CODEC: Codec<MultiNoiseBiomeSourceParameterList>;
    static knownPresets(): Map<MultiNoiseBiomeSourceParameterList$Preset, Climate$ParameterList<ResourceKey<Biome>>>;
    constructor(preset: MultiNoiseBiomeSourceParameterList$Preset, biomes: HolderGetter<Biome>)
    // private parameters: Climate$ParameterList<Holder<Biome>>;
    // private preset: MultiNoiseBiomeSourceParameterList$Preset;
    parameters(): Climate$ParameterList<Holder<Biome>>;
}