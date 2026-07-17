import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { CustomPacketPayload } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { CustomPacketPayload$Type } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type.d.ts'
export class BrandPayload extends Record implements CustomPacketPayload {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, BrandPayload>;
    static TYPE: CustomPacketPayload$Type<BrandPayload>;
    constructor(brand: string)
    // private brand: string;
    brand(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): CustomPacketPayload$Type<BrandPayload>;
    // private write(output: FriendlyByteBuf): void;
}