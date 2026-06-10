import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SingleComponentItemPredicate } from '../../../../../net/minecraft/advancements/criterion/SingleComponentItemPredicate.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { DataComponentPredicate } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate.d.ts'
import type { DataComponentPredicate$Single } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Single.d.ts'
import type { DataComponentPredicate$Type } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Type.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { VillagerType } from '../../../../../net/minecraft/world/entity/npc/villager/VillagerType.d.ts'
export class VillagerTypePredicate extends Record implements SingleComponentItemPredicate<Holder<VillagerType>> {
    static CODEC: Codec<Map<DataComponentPredicate$Type<Object>, DataComponentPredicate>>;
    static CODEC: Codec<VillagerTypePredicate>;
    static SINGLE_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, DataComponentPredicate$Single<Object>>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Map<DataComponentPredicate$Type<Object>, DataComponentPredicate>>;
    static villagerTypes(paramvillagerTypes: Holder<VillagerType>[]): VillagerTypePredicate;
    constructor(villagerTypes: Holder<VillagerType>[])
    // private villagerTypes: Holder<VillagerType>[];
    componentType(): DataComponentType<Holder<VillagerType>>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(components: DataComponentGetter): boolean;
    matches(villagerType: Holder<VillagerType>): boolean;
    toString(): string;
    villagerTypes(): Holder<VillagerType>[];
}