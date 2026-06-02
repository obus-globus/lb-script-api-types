import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { CustomPacketPayload } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { CustomPacketPayload$Type } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type.d.ts'
export class CustomPacketPayload$TypeAndCodec<B extends FriendlyByteBuf, T extends CustomPacketPayload> extends Record {
    constructor(type: CustomPacketPayload$Type<T>, codec: StreamCodec<B, T>)
    // private codec: StreamCodec<B, T>;
    // private type: CustomPacketPayload$Type<T>;
    codec(): StreamCodec<B, T>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): CustomPacketPayload$Type<T>;
}