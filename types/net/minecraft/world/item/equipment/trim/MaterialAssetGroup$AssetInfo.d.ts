import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class MaterialAssetGroup$AssetInfo extends Record {
    static CODEC: Codec<MaterialAssetGroup$AssetInfo>;
    static STREAM_CODEC: StreamCodec<ByteBuf, MaterialAssetGroup$AssetInfo>;
    constructor(suffix: string)
    // private suffix: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    suffix(): string;
    toString(): string;
}