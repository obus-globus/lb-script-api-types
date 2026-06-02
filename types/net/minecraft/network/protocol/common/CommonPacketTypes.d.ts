import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientboundClearDialogPacket } from '../../../../../net/minecraft/network/protocol/common/ClientboundClearDialogPacket.d.ts'
import type { ClientboundCustomPayloadPacket } from '../../../../../net/minecraft/network/protocol/common/ClientboundCustomPayloadPacket.d.ts'
import type { ClientboundCustomReportDetailsPacket } from '../../../../../net/minecraft/network/protocol/common/ClientboundCustomReportDetailsPacket.d.ts'
import type { ClientboundDisconnectPacket } from '../../../../../net/minecraft/network/protocol/common/ClientboundDisconnectPacket.d.ts'
import type { ClientboundKeepAlivePacket } from '../../../../../net/minecraft/network/protocol/common/ClientboundKeepAlivePacket.d.ts'
import type { ClientboundPingPacket } from '../../../../../net/minecraft/network/protocol/common/ClientboundPingPacket.d.ts'
import type { ClientboundResourcePackPopPacket } from '../../../../../net/minecraft/network/protocol/common/ClientboundResourcePackPopPacket.d.ts'
import type { ClientboundResourcePackPushPacket } from '../../../../../net/minecraft/network/protocol/common/ClientboundResourcePackPushPacket.d.ts'
import type { ClientboundServerLinksPacket } from '../../../../../net/minecraft/network/protocol/common/ClientboundServerLinksPacket.d.ts'
import type { ClientboundShowDialogPacket } from '../../../../../net/minecraft/network/protocol/common/ClientboundShowDialogPacket.d.ts'
import type { ClientboundStoreCookiePacket } from '../../../../../net/minecraft/network/protocol/common/ClientboundStoreCookiePacket.d.ts'
import type { ClientboundTransferPacket } from '../../../../../net/minecraft/network/protocol/common/ClientboundTransferPacket.d.ts'
import type { ClientboundUpdateTagsPacket } from '../../../../../net/minecraft/network/protocol/common/ClientboundUpdateTagsPacket.d.ts'
import type { ServerboundClientInformationPacket } from '../../../../../net/minecraft/network/protocol/common/ServerboundClientInformationPacket.d.ts'
import type { ServerboundCustomClickActionPacket } from '../../../../../net/minecraft/network/protocol/common/ServerboundCustomClickActionPacket.d.ts'
import type { ServerboundCustomPayloadPacket } from '../../../../../net/minecraft/network/protocol/common/ServerboundCustomPayloadPacket.d.ts'
import type { ServerboundKeepAlivePacket } from '../../../../../net/minecraft/network/protocol/common/ServerboundKeepAlivePacket.d.ts'
import type { ServerboundPongPacket } from '../../../../../net/minecraft/network/protocol/common/ServerboundPongPacket.d.ts'
import type { ServerboundResourcePackPacket } from '../../../../../net/minecraft/network/protocol/common/ServerboundResourcePackPacket.d.ts'
export class CommonPacketTypes extends Object {
    static CLIENTBOUND_CLEAR_DIALOG: PacketType<ClientboundClearDialogPacket>;
    static CLIENTBOUND_CUSTOM_PAYLOAD: PacketType<ClientboundCustomPayloadPacket>;
    static CLIENTBOUND_CUSTOM_REPORT_DETAILS: PacketType<ClientboundCustomReportDetailsPacket>;
    static CLIENTBOUND_DISCONNECT: PacketType<ClientboundDisconnectPacket>;
    static CLIENTBOUND_KEEP_ALIVE: PacketType<ClientboundKeepAlivePacket>;
    static CLIENTBOUND_PING: PacketType<ClientboundPingPacket>;
    static CLIENTBOUND_RESOURCE_PACK_POP: PacketType<ClientboundResourcePackPopPacket>;
    static CLIENTBOUND_RESOURCE_PACK_PUSH: PacketType<ClientboundResourcePackPushPacket>;
    static CLIENTBOUND_SERVER_LINKS: PacketType<ClientboundServerLinksPacket>;
    static CLIENTBOUND_SHOW_DIALOG: PacketType<ClientboundShowDialogPacket>;
    static CLIENTBOUND_STORE_COOKIE: PacketType<ClientboundStoreCookiePacket>;
    static CLIENTBOUND_TRANSFER: PacketType<ClientboundTransferPacket>;
    static CLIENTBOUND_UPDATE_TAGS: PacketType<ClientboundUpdateTagsPacket>;
    static SERVERBOUND_CLIENT_INFORMATION: PacketType<ServerboundClientInformationPacket>;
    static SERVERBOUND_CUSTOM_CLICK_ACTION: PacketType<ServerboundCustomClickActionPacket>;
    static SERVERBOUND_CUSTOM_PAYLOAD: PacketType<ServerboundCustomPayloadPacket>;
    static SERVERBOUND_KEEP_ALIVE: PacketType<ServerboundKeepAlivePacket>;
    static SERVERBOUND_PONG: PacketType<ServerboundPongPacket>;
    static SERVERBOUND_RESOURCE_PACK: PacketType<ServerboundResourcePackPacket>;
    constructor()
}