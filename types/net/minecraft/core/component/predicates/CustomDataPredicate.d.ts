import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { NbtPredicate } from '../../../../../net/minecraft/advancements/criterion/NbtPredicate.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentPredicate } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class CustomDataPredicate extends Record implements DataComponentPredicate {
    static CODEC: Codec<Object>;
    static CODEC: Codec<CustomDataPredicate>;
    static SINGLE_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    static customData(paramvalue: NbtPredicate): CustomDataPredicate;
    static singleCodec(paramname: string): MapCodec<Object>;
    constructor(value: NbtPredicate)
    // private value: NbtPredicate;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(components: DataComponentGetter): boolean;
    toString(): string;
    value(): NbtPredicate;
}