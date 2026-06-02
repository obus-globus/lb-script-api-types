import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { MultiNoiseBiomeSourceParameterList$Preset$SourceProvider } from '../../../../../net/minecraft/world/level/biome/MultiNoiseBiomeSourceParameterList$Preset$SourceProvider.d.ts'
export class MultiNoiseBiomeSourceParameterList$Preset extends Record {
    static CODEC: Codec<MultiNoiseBiomeSourceParameterList$Preset>;
    static NETHER: MultiNoiseBiomeSourceParameterList$Preset;
    static OVERWORLD: MultiNoiseBiomeSourceParameterList$Preset;
    constructor(id: Identifier, provider: (param0: (param0: Object | null) => Object | null) => net.minecraft.world.level.biome.Climate.ParameterList<unknown>)
    // private id: Identifier;
    // private provider: (param0: (param0: Object | null) => Object | null) => net.minecraft.world.level.biome.Climate.ParameterList<unknown>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): Identifier;
    provider(): (param0: (param0: Object | null) => Object | null) => net.minecraft.world.level.biome.Climate.ParameterList<unknown>;
    toString(): string;
    usedBiomes(): Stream<ResourceKey<Biome>>;
}