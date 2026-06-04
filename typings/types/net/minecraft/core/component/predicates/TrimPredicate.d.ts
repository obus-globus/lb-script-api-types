import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SingleComponentItemPredicate } from '../../../../../net/minecraft/advancements/criterion/SingleComponentItemPredicate.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ArmorTrim } from '../../../../../net/minecraft/world/item/equipment/trim/ArmorTrim.d.ts'
export class TrimPredicate extends Record implements SingleComponentItemPredicate<ArmorTrim> {
    static CODEC: Codec<Object>;
    static CODEC: Codec<TrimPredicate>;
    static SINGLE_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    constructor(material: Optional<Holder<T>[]>, pattern: Optional<Holder<T>[]>)
    // private material: Optional<Holder<T>[]>;
    // private pattern: Optional<Holder<T>[]>;
    componentType(): DataComponentType<ArmorTrim>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(components: DataComponentGetter): boolean;
    matches(value: ArmorTrim): boolean;
    material(): Optional<Holder<T>[]>;
    pattern(): Optional<Holder<T>[]>;
    toString(): string;
}