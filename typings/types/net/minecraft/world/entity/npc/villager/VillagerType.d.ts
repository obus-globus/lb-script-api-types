import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Biome } from '../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
export class VillagerType extends Object {
    static BY_BIOME: Map<ResourceKey<Biome>, ResourceKey<VillagerType>>;
    static CODEC: Codec<Holder<VillagerType>>;
    static DESERT: ResourceKey<VillagerType>;
    static JUNGLE: ResourceKey<VillagerType>;
    static PLAINS: ResourceKey<VillagerType>;
    static SAVANNA: ResourceKey<VillagerType>;
    static SNOW: ResourceKey<VillagerType>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Holder<VillagerType>>;
    static SWAMP: ResourceKey<VillagerType>;
    static TAIGA: ResourceKey<VillagerType>;
    static bootstrap(paramregistry: VillagerType[]): VillagerType;
    static byBiome(parambiome: Holder<Biome>): ResourceKey<VillagerType>;
    constructor()
}