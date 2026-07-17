import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { CustomPacketPayload } from '../../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { CustomPacketPayload$Type } from '../../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ClientboundRequestAcceptedAttachmentsPayload extends Object implements CustomPacketPayload {
    static CODEC: StreamCodec<FriendlyByteBuf, ClientboundRequestAcceptedAttachmentsPayload>;
    static ID: CustomPacketPayload$Type<ClientboundRequestAcceptedAttachmentsPayload>;
    static INSTANCE: ClientboundRequestAcceptedAttachmentsPayload;
    static PACKET_ID: Identifier;
    private constructor()
    type(): CustomPacketPayload$Type<CustomPacketPayload>;
}