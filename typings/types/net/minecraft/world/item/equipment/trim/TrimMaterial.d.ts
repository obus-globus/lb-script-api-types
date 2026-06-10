import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { MaterialAssetGroup } from '../../../../../../net/minecraft/world/item/equipment/trim/MaterialAssetGroup.d.ts'
export class TrimMaterial extends Record {
    static CODEC: Codec<Holder<TrimMaterial>>;
    static DIRECT_CODEC: Codec<TrimMaterial>;
    static DIRECT_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, TrimMaterial>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Holder<TrimMaterial>>;
    constructor(assets: MaterialAssetGroup, description: Component)
    // private assets: MaterialAssetGroup;
    // private description: Component;
    assets(): MaterialAssetGroup;
    description(): Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}