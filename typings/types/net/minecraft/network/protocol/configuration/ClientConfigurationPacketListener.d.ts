import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ConnectionProtocol } from '../../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { DisconnectionDetails } from '../../../../../net/minecraft/network/DisconnectionDetails.d.ts'
import type { ClientCommonPacketListener } from '../../../../../net/minecraft/network/protocol/common/ClientCommonPacketListener.d.ts'
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
import type { ClientboundCodeOfConductPacket } from '../../../../../net/minecraft/network/protocol/configuration/ClientboundCodeOfConductPacket.d.ts'
import type { ClientboundFinishConfigurationPacket } from '../../../../../net/minecraft/network/protocol/configuration/ClientboundFinishConfigurationPacket.d.ts'
import type { ClientboundRegistryDataPacket } from '../../../../../net/minecraft/network/protocol/configuration/ClientboundRegistryDataPacket.d.ts'
import type { ClientboundResetChatPacket } from '../../../../../net/minecraft/network/protocol/configuration/ClientboundResetChatPacket.d.ts'
import type { ClientboundSelectKnownPacks } from '../../../../../net/minecraft/network/protocol/configuration/ClientboundSelectKnownPacks.d.ts'
import type { ClientboundUpdateEnabledFeaturesPacket } from '../../../../../net/minecraft/network/protocol/configuration/ClientboundUpdateEnabledFeaturesPacket.d.ts'
import type { ClientboundCookieRequestPacket } from '../../../../../net/minecraft/network/protocol/cookie/ClientboundCookieRequestPacket.d.ts'
export interface ClientConfigurationPacketListener extends Object, ClientCommonPacketListener{
    handleClearDialog(packet: ClientboundClearDialogPacket): void;
    handleCodeOfConduct(packet: ClientboundCodeOfConductPacket): void;
    handleConfigurationFinished(packet: ClientboundFinishConfigurationPacket): void;
    handleCustomPayload(packet: ClientboundCustomPayloadPacket): void;
    handleCustomReportDetails(packet: ClientboundCustomReportDetailsPacket): void;
    handleDisconnect(packet: ClientboundDisconnectPacket): void;
    handleEnabledFeatures(packet: ClientboundUpdateEnabledFeaturesPacket): void;
    handleKeepAlive(packet: ClientboundKeepAlivePacket): void;
    handlePing(packet: ClientboundPingPacket): void;
    handleRegistryData(packet: ClientboundRegistryDataPacket): void;
    handleRequestCookie(packet: ClientboundCookieRequestPacket): void;
    handleResetChat(packet: ClientboundResetChatPacket): void;
    handleResourcePackPop(packet: ClientboundResourcePackPopPacket): void;
    handleResourcePackPush(packet: ClientboundResourcePackPushPacket): void;
    handleSelectKnownPacks(packet: ClientboundSelectKnownPacks): void;
    handleServerLinks(packet: ClientboundServerLinksPacket): void;
    handleShowDialog(packet: ClientboundShowDialogPacket): void;
    handleStoreCookie(packet: ClientboundStoreCookiePacket): void;
    handleTransfer(packet: ClientboundTransferPacket): void;
    handleUpdateTags(packet: ClientboundUpdateTagsPacket): void;
    isAcceptingMessages(): boolean;
    onDisconnect(details: DisconnectionDetails): void;
    protocol(): ConnectionProtocol;
}