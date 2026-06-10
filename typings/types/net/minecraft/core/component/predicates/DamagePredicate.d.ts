import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MinMaxBounds$Ints } from '../../../../../net/minecraft/advancements/criterion/MinMaxBounds$Ints.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentPredicate } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate.d.ts'
import type { DataComponentPredicate$Single } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Single.d.ts'
import type { DataComponentPredicate$Type } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Type.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class DamagePredicate extends Record implements DataComponentPredicate {
    static CODEC: Codec<Map<DataComponentPredicate$Type<Object>, DataComponentPredicate>>;
    static CODEC: Codec<DamagePredicate>;
    static SINGLE_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, DataComponentPredicate$Single<Object>>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Map<DataComponentPredicate$Type<Object>, DataComponentPredicate>>;
    static durability(paramrange: MinMaxBounds$Ints): DamagePredicate;
    static singleCodec(paramname: string): MapCodec<DataComponentPredicate$Single<Object>>;
    constructor(durability: MinMaxBounds$Ints, damage: MinMaxBounds$Ints)
    // private damage: MinMaxBounds$Ints;
    // private durability: MinMaxBounds$Ints;
    damage(): MinMaxBounds$Ints;
    durability(): MinMaxBounds$Ints;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(components: DataComponentGetter): boolean;
    toString(): string;
}