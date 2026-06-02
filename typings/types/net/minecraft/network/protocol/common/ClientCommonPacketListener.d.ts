import type { Object } from '../../../../../java/lang/Object.d.ts'
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
import type { ClientCookiePacketListener } from '../../../../../net/minecraft/network/protocol/cookie/ClientCookiePacketListener.d.ts'
export interface ClientCommonPacketListener extends Object, ClientCookiePacketListener{
    handleClearDialog(packet: ClientboundClearDialogPacket): void;
    handleCustomPayload(packet: ClientboundCustomPayloadPacket): void;
    handleCustomReportDetails(packet: ClientboundCustomReportDetailsPacket): void;
    handleDisconnect(packet: ClientboundDisconnectPacket): void;
    handleKeepAlive(packet: ClientboundKeepAlivePacket): void;
    handlePing(packet: ClientboundPingPacket): void;
    handleResourcePackPop(packet: ClientboundResourcePackPopPacket): void;
    handleResourcePackPush(packet: ClientboundResourcePackPushPacket): void;
    handleServerLinks(packet: ClientboundServerLinksPacket): void;
    handleShowDialog(packet: ClientboundShowDialogPacket): void;
    handleStoreCookie(packet: ClientboundStoreCookiePacket): void;
    handleTransfer(packet: ClientboundTransferPacket): void;
    handleUpdateTags(packet: ClientboundUpdateTagsPacket): void;
}