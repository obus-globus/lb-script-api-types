import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
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
import type { ArmorTrim } from '../../../../../net/minecraft/world/item/equipment/trim/ArmorTrim.d.ts'
import type { TrimMaterial } from '../../../../../net/minecraft/world/item/equipment/trim/TrimMaterial.d.ts'
import type { TrimPattern } from '../../../../../net/minecraft/world/item/equipment/trim/TrimPattern.d.ts'
export class TrimPredicate extends Record implements SingleComponentItemPredicate<ArmorTrim> {
    static CODEC: Codec<Map<DataComponentPredicate$Type<Object>, DataComponentPredicate>>;
    static CODEC: Codec<TrimPredicate>;
    static SINGLE_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, DataComponentPredicate$Single<Object>>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Map<DataComponentPredicate$Type<Object>, DataComponentPredicate>>;
    constructor(material: Optional<Holder<TrimMaterial>[]>, pattern: Optional<Holder<TrimPattern>[]>)
    // private material: Optional<Holder<TrimMaterial>[]>;
    // private pattern: Optional<Holder<TrimPattern>[]>;
    componentType(): DataComponentType<ArmorTrim>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(components: DataComponentGetter): boolean;
    matches(value: ArmorTrim): boolean;
    material(): Optional<Holder<TrimMaterial>[]>;
    pattern(): Optional<Holder<TrimPattern>[]>;
    toString(): string;
}