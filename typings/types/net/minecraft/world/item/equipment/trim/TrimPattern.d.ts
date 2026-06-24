import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { TrimMaterial } from '../../../../../../net/minecraft/world/item/equipment/trim/TrimMaterial.d.ts'
export class TrimPattern extends Record {
    static CODEC: Codec<Holder<TrimPattern>>;
    static DIRECT_CODEC: Codec<TrimPattern>;
    static DIRECT_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, TrimPattern>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Holder<TrimPattern>>;
    constructor(assetId: Identifier, description: Component, decal: boolean)
    // private assetId: Identifier;
    // private decal: boolean;
    // private description: Component;
    assetId(): Identifier;
    copyWithStyle(material: Holder<TrimMaterial>): Component;
    decal(): boolean;
    description(): Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}