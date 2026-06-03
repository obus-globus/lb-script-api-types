import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CollectionPredicate } from '../../../../../net/minecraft/advancements/criterion/CollectionPredicate.d.ts'
import type { MinMaxBounds$Ints } from '../../../../../net/minecraft/advancements/criterion/MinMaxBounds$Ints.d.ts'
import type { SingleComponentItemPredicate } from '../../../../../net/minecraft/advancements/criterion/SingleComponentItemPredicate.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { FireworkExplosionPredicate$FireworkPredicate } from '../../../../../net/minecraft/core/component/predicates/FireworkExplosionPredicate$FireworkPredicate.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { FireworkExplosion } from '../../../../../net/minecraft/world/item/component/FireworkExplosion.d.ts'
import type { Fireworks } from '../../../../../net/minecraft/world/item/component/Fireworks.d.ts'
export class FireworksPredicate extends Record implements SingleComponentItemPredicate<Fireworks> {
    static CODEC: Codec<Object>;
    static CODEC: Codec<FireworksPredicate>;
    static SINGLE_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    constructor(explosions: Optional<CollectionPredicate<FireworkExplosion, FireworkExplosionPredicate$FireworkPredicate>>, flightDuration: MinMaxBounds$Ints)
    // private explosions: Optional<CollectionPredicate<FireworkExplosion, FireworkExplosionPredicate$FireworkPredicate>>;
    // private flightDuration: MinMaxBounds$Ints;
    componentType(): DataComponentType<Fireworks>;
    equals(o: Object | null): boolean;
    explosions(): Optional<CollectionPredicate<FireworkExplosion, FireworkExplosionPredicate$FireworkPredicate>>;
    flightDuration(): MinMaxBounds$Ints;
    hashCode(): number;
    matches(components: DataComponentGetter): boolean;
    matches(components: DataComponentGetter): boolean;
    matches(value: Fireworks): boolean;
    toString(): string;
}