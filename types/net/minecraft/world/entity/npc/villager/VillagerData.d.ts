import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { HolderGetter$Provider } from '../../../../../../net/minecraft/core/HolderGetter$Provider.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { VillagerProfession } from '../../../../../../net/minecraft/world/entity/npc/villager/VillagerProfession.d.ts'
import type { VillagerType } from '../../../../../../net/minecraft/world/entity/npc/villager/VillagerType.d.ts'
export class VillagerData extends Record {
    static CODEC: Codec<VillagerData>;
    static MAX_VILLAGER_LEVEL: number;
    static MIN_VILLAGER_LEVEL: number;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, VillagerData>;
    static canLevelUp(paramcurrentLevel: number): boolean;
    static getMaxXpPerLevel(paramlevel: number): number;
    static getMinXpPerLevel(paramlevel: number): number;
    // private level: number;
    // private profession: Holder<VillagerProfession>;
    // private type: Holder<VillagerType>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    level(): number;
    profession(): Holder<VillagerProfession>;
    toString(): string;
    type(): Holder<VillagerType>;
    withLevel(level: number): VillagerData;
    withProfession(profession: Holder<VillagerProfession>): VillagerData;
    withProfession(registries: HolderGetter$Provider, profession: ResourceKey<VillagerProfession>): VillagerData;
    withType(type: Holder<VillagerType>): VillagerData;
    withType(registries: HolderGetter$Provider, type: ResourceKey<VillagerType>): VillagerData;
}