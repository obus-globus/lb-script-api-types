import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AttachmentChange } from '../../../../../../../net/fabricmc/fabric/impl/attachment/sync/AttachmentChange.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { CustomPacketPayload } from '../../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { CustomPacketPayload$Type } from '../../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ClientboundAttachmentSyncPayload extends Record implements CustomPacketPayload {
    static CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundAttachmentSyncPayload>;
    static PACKET_ID: Identifier;
    static TYPE: CustomPacketPayload$Type<ClientboundAttachmentSyncPayload>;
    constructor(attachment: AttachmentChange)
    // private attachment: AttachmentChange;
    attachment(): AttachmentChange;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): CustomPacketPayload$Type<CustomPacketPayload>;
}