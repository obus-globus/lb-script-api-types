import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { TrimMaterial } from '../../../../../net/minecraft/world/item/equipment/trim/TrimMaterial.d.ts'
export class ProvidesTrimMaterial extends Record {
    static CODEC: Codec<ProvidesTrimMaterial>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ProvidesTrimMaterial>;
    constructor(material: Holder<TrimMaterial>)
    // private material: Holder<TrimMaterial>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    material(): Holder<TrimMaterial>;
    toString(): string;
}