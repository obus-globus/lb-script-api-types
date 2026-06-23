import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SingleComponentItemPredicate } from '../../../../../net/minecraft/advancements/criterion/SingleComponentItemPredicate.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { DataComponentPredicate } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate.d.ts'
import type { DataComponentPredicate$Single } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Single.d.ts'
import type { DataComponentPredicate$Type } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Type.d.ts'
import type { FireworkExplosionPredicate$FireworkPredicate } from '../../../../../net/minecraft/core/component/predicates/FireworkExplosionPredicate$FireworkPredicate.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { FireworkExplosion } from '../../../../../net/minecraft/world/item/component/FireworkExplosion.d.ts'
export class FireworkExplosionPredicate extends Record implements SingleComponentItemPredicate<FireworkExplosion> {
    static CODEC: Codec<Map<DataComponentPredicate$Type<any>, DataComponentPredicate>>;
    static CODEC: Codec<FireworkExplosionPredicate>;
    static SINGLE_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, DataComponentPredicate$Single<any>>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Map<DataComponentPredicate$Type<any>, DataComponentPredicate>>;
    constructor(predicate: FireworkExplosionPredicate$FireworkPredicate)
    // private predicate: FireworkExplosionPredicate$FireworkPredicate;
    componentType(): DataComponentType<FireworkExplosion>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(components: DataComponentGetter): boolean;
    matches(value: FireworkExplosion): boolean;
    predicate(): FireworkExplosionPredicate$FireworkPredicate;
    toString(): string;
}