import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CollectionPredicate } from '../../../../../net/minecraft/advancements/predicates/CollectionPredicate.d.ts'
import type { MinMaxBounds$Ints } from '../../../../../net/minecraft/advancements/predicates/MinMaxBounds$Ints.d.ts'
import type { SingleComponentItemPredicate } from '../../../../../net/minecraft/advancements/predicates/SingleComponentItemPredicate.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { DataComponentPredicate } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate.d.ts'
import type { DataComponentPredicate$Single } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Single.d.ts'
import type { DataComponentPredicate$Type } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Type.d.ts'
import type { WrittenBookPredicate$PagePredicate } from '../../../../../net/minecraft/core/component/predicates/WrittenBookPredicate$PagePredicate.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Filterable } from '../../../../../net/minecraft/server/network/Filterable.d.ts'
import type { WrittenBookContent } from '../../../../../net/minecraft/world/item/component/WrittenBookContent.d.ts'
export class WrittenBookPredicate extends Record implements SingleComponentItemPredicate<WrittenBookContent> {
    static CODEC: Codec<WrittenBookPredicate>;
    static SINGLE_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, DataComponentPredicate$Single<any>>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, JavaMap<DataComponentPredicate$Type<any>, DataComponentPredicate>>;
    constructor(pages: Optional<CollectionPredicate<Filterable<Component>, WrittenBookPredicate$PagePredicate>>, author: Optional<string>, title: Optional<string>, generation: MinMaxBounds$Ints, resolved: Optional<boolean>)
    // private author: Optional<string>;
    // private generation: MinMaxBounds$Ints;
    // private pages: Optional<CollectionPredicate<Filterable<Component>, WrittenBookPredicate$PagePredicate>>;
    // private resolved: Optional<boolean>;
    // private title: Optional<string>;
    author(): Optional<string>;
    componentType(): DataComponentType<WrittenBookContent>;
    equals(o: Object | null): boolean;
    generation(): MinMaxBounds$Ints;
    hashCode(): number;
    matches(components: DataComponentGetter): boolean;
    matches(value: WrittenBookContent): boolean;
    pages(): Optional<CollectionPredicate<Filterable<Component>, WrittenBookPredicate$PagePredicate>>;
    resolved(): Optional<boolean>;
    title(): Optional<string>;
    toString(): string;
}