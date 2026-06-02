import type { Either } from '../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BiomeSourceAccess } from '../../../../../net/fabricmc/fabric/impl/biome/BiomeSourceAccess.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BiomeSource } from '../../../../../net/minecraft/world/level/biome/BiomeSource.d.ts'
import type { Climate$ParameterList } from '../../../../../net/minecraft/world/level/biome/Climate$ParameterList.d.ts'
import type { Climate$Sampler } from '../../../../../net/minecraft/world/level/biome/Climate$Sampler.d.ts'
import type { Climate$TargetPoint } from '../../../../../net/minecraft/world/level/biome/Climate$TargetPoint.d.ts'
import type { MultiNoiseBiomeSourceParameterList } from '../../../../../net/minecraft/world/level/biome/MultiNoiseBiomeSourceParameterList.d.ts'
export class MultiNoiseBiomeSource extends BiomeSource implements BiomeSourceAccess {
    static CODEC: Codec<BiomeSource>;
    static CODEC: MapCodec<MultiNoiseBiomeSource>;
    static DIRECT_CODEC: MapCodec<Object>;
    static createFromList(paramparameters: Climate$ParameterList<Object>): MultiNoiseBiomeSource;
    static createFromPreset(parampreset: Holder<MultiNoiseBiomeSourceParameterList>): MultiNoiseBiomeSource;
    private constructor(parameters: Either<Climate$ParameterList<Holder<Biome>>, Holder<MultiNoiseBiomeSourceParameterList>>)
    // private modifyBiomeEntries: boolean;
    // private parameters: Either<Climate$ParameterList<Holder<Biome>>, Holder<MultiNoiseBiomeSourceParameterList>>;
    addDebugInfo(result: string[], feetPos: BlockPos, sampler: Climate$Sampler): void;
    codec(): MapCodec<BiomeSource>;
    collectPossibleBiomes(): Stream<Holder<Biome>>;
    fabric_setModifyBiomeEntries(arg0: boolean): void;
    fabric_shouldModifyBiomeEntries(): boolean;
    getNoiseBiome(quartX: number, quartY: number, quartZ: number, sampler: Climate$Sampler): Holder<Biome>;
    getNoiseBiome(target: Climate$TargetPoint): Holder<Biome>;
    // private parameters(): Climate$ParameterList<Holder<Biome>>;
    stable(expected: ResourceKey<MultiNoiseBiomeSourceParameterList>): boolean;
}