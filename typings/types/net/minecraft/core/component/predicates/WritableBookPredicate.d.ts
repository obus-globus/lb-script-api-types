import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CollectionPredicate } from '../../../../../net/minecraft/advancements/criterion/CollectionPredicate.d.ts'
import type { SingleComponentItemPredicate } from '../../../../../net/minecraft/advancements/criterion/SingleComponentItemPredicate.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { DataComponentPredicate } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate.d.ts'
import type { DataComponentPredicate$Single } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Single.d.ts'
import type { DataComponentPredicate$Type } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Type.d.ts'
import type { WritableBookPredicate$PagePredicate } from '../../../../../net/minecraft/core/component/predicates/WritableBookPredicate$PagePredicate.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Filterable } from '../../../../../net/minecraft/server/network/Filterable.d.ts'
import type { WritableBookContent } from '../../../../../net/minecraft/world/item/component/WritableBookContent.d.ts'
export class WritableBookPredicate extends Record implements SingleComponentItemPredicate<WritableBookContent> {
    static CODEC: Codec<Map<DataComponentPredicate$Type<any>, DataComponentPredicate>>;
    static CODEC: Codec<WritableBookPredicate>;
    static SINGLE_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, DataComponentPredicate$Single<any>>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Map<DataComponentPredicate$Type<any>, DataComponentPredicate>>;
    constructor(pages: Optional<CollectionPredicate<Filterable<string>, WritableBookPredicate$PagePredicate>>)
    // private pages: Optional<CollectionPredicate<Filterable<string>, WritableBookPredicate$PagePredicate>>;
    componentType(): DataComponentType<WritableBookContent>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(components: DataComponentGetter): boolean;
    matches(value: WritableBookContent): boolean;
    pages(): Optional<CollectionPredicate<Filterable<string>, WritableBookPredicate$PagePredicate>>;
    toString(): string;
}