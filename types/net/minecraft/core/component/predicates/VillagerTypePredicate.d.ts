import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SingleComponentItemPredicate } from '../../../../../net/minecraft/advancements/criterion/SingleComponentItemPredicate.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { VillagerType } from '../../../../../net/minecraft/world/entity/npc/villager/VillagerType.d.ts'
export class VillagerTypePredicate extends Record implements SingleComponentItemPredicate<Holder<VillagerType>> {
    static CODEC: Codec<Object>;
    static CODEC: Codec<VillagerTypePredicate>;
    static SINGLE_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    static villagerTypes(paramvillagerTypes: Holder<T>[]): VillagerTypePredicate;
    constructor(villagerTypes: Holder<T>[])
    // private villagerTypes: Holder<T>[];
    componentType(): DataComponentType<Holder<VillagerType>>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(components: DataComponentGetter): boolean;
    matches(villagerType: Holder<VillagerType>): boolean;
    toString(): string;
    villagerTypes(): Holder<T>[];
}