import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { BooleanSupplier } from '../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { PacketContext } from '../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext.d.ts'
import type { PacketContextProvider } from '../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContextProvider.d.ts'
import type { PacketListenerExtensions } from '../../../../net/fabricmc/fabric/impl/networking/PacketListenerExtensions.d.ts'
import type { ClientCommonPacketListenerImplAccessor } from '../../../../net/fabricmc/fabric/mixin/networking/client/accessor/ClientCommonPacketListenerImplAccessor.d.ts'
import type { CrashReport } from '../../../../net/minecraft/CrashReport.d.ts'
import type { CrashReportCategory } from '../../../../net/minecraft/CrashReportCategory.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { Screen } from '../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { DialogConnectionAccess } from '../../../../net/minecraft/client/gui/screens/dialog/DialogConnectionAccess.d.ts'
import type { ClientCommonPacketListenerImpl$DeferredPacket } from '../../../../net/minecraft/client/multiplayer/ClientCommonPacketListenerImpl$DeferredPacket.d.ts'
import type { CommonListenerCookie } from '../../../../net/minecraft/client/multiplayer/CommonListenerCookie.d.ts'
import type { PlayerInfo } from '../../../../net/minecraft/client/multiplayer/PlayerInfo.d.ts'
import type { ServerData } from '../../../../net/minecraft/client/multiplayer/ServerData.d.ts'
import type { WorldSessionTelemetryManager } from '../../../../net/minecraft/client/telemetry/WorldSessionTelemetryManager.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Connection } from '../../../../net/minecraft/network/Connection.d.ts'
import type { DisconnectionDetails } from '../../../../net/minecraft/network/DisconnectionDetails.d.ts'
import type { PacketListener } from '../../../../net/minecraft/network/PacketListener.d.ts'
import type { ServerboundPacketListener } from '../../../../net/minecraft/network/ServerboundPacketListener.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ClientCommonPacketListener } from '../../../../net/minecraft/network/protocol/common/ClientCommonPacketListener.d.ts'
import type { ClientboundClearDialogPacket } from '../../../../net/minecraft/network/protocol/common/ClientboundClearDialogPacket.d.ts'
import type { ClientboundCustomPayloadPacket } from '../../../../net/minecraft/network/protocol/common/ClientboundCustomPayloadPacket.d.ts'
import type { ClientboundCustomReportDetailsPacket } from '../../../../net/minecraft/network/protocol/common/ClientboundCustomReportDetailsPacket.d.ts'
import type { ClientboundDisconnectPacket } from '../../../../net/minecraft/network/protocol/common/ClientboundDisconnectPacket.d.ts'
import type { ClientboundKeepAlivePacket } from '../../../../net/minecraft/network/protocol/common/ClientboundKeepAlivePacket.d.ts'
import type { ClientboundPingPacket } from '../../../../net/minecraft/network/protocol/common/ClientboundPingPacket.d.ts'
import type { ClientboundResourcePackPopPacket } from '../../../../net/minecraft/network/protocol/common/ClientboundResourcePackPopPacket.d.ts'
import type { ClientboundResourcePackPushPacket } from '../../../../net/minecraft/network/protocol/common/ClientboundResourcePackPushPacket.d.ts'
import type { ClientboundServerLinksPacket } from '../../../../net/minecraft/network/protocol/common/ClientboundServerLinksPacket.d.ts'
import type { ClientboundShowDialogPacket } from '../../../../net/minecraft/network/protocol/common/ClientboundShowDialogPacket.d.ts'
import type { ClientboundStoreCookiePacket } from '../../../../net/minecraft/network/protocol/common/ClientboundStoreCookiePacket.d.ts'
import type { ClientboundTransferPacket } from '../../../../net/minecraft/network/protocol/common/ClientboundTransferPacket.d.ts'
import type { CustomPacketPayload } from '../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { ClientboundCookieRequestPacket } from '../../../../net/minecraft/network/protocol/cookie/ClientboundCookieRequestPacket.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ServerLinks } from '../../../../net/minecraft/server/ServerLinks.d.ts'
import type { Dialog } from '../../../../net/minecraft/server/dialog/Dialog.d.ts'
export abstract class ClientCommonPacketListenerImpl extends Object implements PacketContextProvider, PacketListenerExtensions, ClientCommonPacketListenerImplAccessor, ClientCommonPacketListener {
    constructor(minecraft: Minecraft, connection: Connection, cookie: CommonListenerCookie)
    readonly connection: Connection;
    // private customReportDetails: { [key: string]: string };
    // private deferredPackets: ClientCommonPacketListenerImpl$DeferredPacket[];
    // private isTransferring: boolean;
    // private minecraft: Minecraft;
    // private postDisconnectScreen: Screen;
    // private seenInsecureChatWarning: boolean;
    // private seenPlayers: Map<UUID, PlayerInfo>;
    // private serverBrand: string;
    // private serverCookies: Map<Identifier, number[]>;
    // private serverData: ServerData;
    // private serverLinks: ServerLinks;
    // private telemetryManager: WorldSessionTelemetryManager;
    // private addOrUpdatePackPrompt(packId: UUID, url: URL, hash: string, required: boolean, prompt: Component): Screen;
    clearDialog(): void;
    createDialogAccess(): DialogConnectionAccess;
    createDisconnectScreen(details: DisconnectionDetails): Screen;
    createDisconnectionInfo(reason: Component, cause: Throwable): DisconnectionDetails;
    fillListenerSpecificCrashDetails(report: CrashReport, connectionDetails: CrashReportCategory): void;
    getPacketContext(): PacketContext;
    handleClearDialog(packet: ClientboundClearDialogPacket): void;
    handleCustomPayload(packet: ClientboundCustomPayloadPacket): void;
    handleCustomPayload(payload: CustomPacketPayload): void;
    handleCustomReportDetails(packet: ClientboundCustomReportDetailsPacket): void;
    handleDisconnect(packet: ClientboundDisconnectPacket): void;
    handleKeepAlive(packet: ClientboundKeepAlivePacket): void;
    handlePing(packet: ClientboundPingPacket): void;
    handleRequestCookie(packet: ClientboundCookieRequestPacket): void;
    handleResourcePackPop(packet: ClientboundResourcePackPopPacket): void;
    handleResourcePackPush(packet: ClientboundResourcePackPushPacket): void;
    handleServerLinks(packet: ClientboundServerLinksPacket): void;
    handleShowDialog(packet: ClientboundShowDialogPacket): void;
    handleStoreCookie(packet: ClientboundStoreCookiePacket): void;
    handleTransfer(packet: ClientboundTransferPacket): void;
    onDisconnect(details: DisconnectionDetails): void;
    onPacketError(packet: Packet<PacketListener>, cause: Exception): void;
    send(packet: Packet<Object>): void;
    sendDeferredPackets(): void;
    // private sendWhen(packet: Packet<ServerboundPacketListener>, condition: () => kotlin.Boolean, expireAfterDuration: Duration): void;
    serverBrand(): string;
    serverLinks(): ServerLinks;
    shouldHandleMessage(packet: Packet<Object>): boolean;
    showDialog(dialog: Holder<Dialog>, activeScreen: Screen): void;
    showDialog(dialog: Holder<Dialog>, connectionAccess: DialogConnectionAccess, activeScreen: Screen): void;
    // private storeDisconnectionReport(packet: Packet<PacketListener>, cause: Throwable): Optional<Path[]>;
}