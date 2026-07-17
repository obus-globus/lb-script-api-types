import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { CustomPacketPayload } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { CustomPacketPayload$Type } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type.d.ts'
export class SyncCompletePayload extends Object implements CustomPacketPayload {
    static CODEC: StreamCodec<FriendlyByteBuf, SyncCompletePayload>;
    static ID: CustomPacketPayload$Type<SyncCompletePayload>;
    static INSTANCE: SyncCompletePayload;
    private constructor()
    type(): CustomPacketPayload$Type<CustomPacketPayload>;
}