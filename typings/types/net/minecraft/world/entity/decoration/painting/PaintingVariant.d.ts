import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class PaintingVariant extends Record {
    static CODEC: Codec<Holder<PaintingVariant>>;
    static DIRECT_CODEC: Codec<PaintingVariant>;
    static DIRECT_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, PaintingVariant>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Holder<PaintingVariant>>;
    constructor(width: number, height: number, assetId: Identifier, title: Optional<Component>, author: Optional<Component>)
    // private assetId: Identifier;
    // private author: Optional<Component>;
    // private height: number;
    // private title: Optional<Component>;
    // private width: number;
    area(): number;
    assetId(): Identifier;
    author(): Optional<Component>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    height(): number;
    title(): Optional<Component>;
    toString(): string;
    width(): number;
}