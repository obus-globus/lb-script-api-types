import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class BannerPattern extends Record {
    static CODEC: Codec<Holder<BannerPattern>>;
    static DIRECT_CODEC: Codec<BannerPattern>;
    static DIRECT_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, BannerPattern>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Holder<BannerPattern>>;
    constructor(assetId: Identifier, translationKey: string)
    // private assetId: Identifier;
    // private translationKey: string;
    assetId(): Identifier;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    translationKey(): string;
}