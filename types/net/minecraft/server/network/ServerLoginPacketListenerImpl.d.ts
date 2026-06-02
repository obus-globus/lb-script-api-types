import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PacketContext } from '../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext.d.ts'
import type { PacketContextProvider } from '../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContextProvider.d.ts'
import type { PacketCallbackListener } from '../../../../net/fabricmc/fabric/impl/networking/PacketCallbackListener.d.ts'
import type { PacketListenerExtensions } from '../../../../net/fabricmc/fabric/impl/networking/PacketListenerExtensions.d.ts'
import type { ServerLoginNetworkAddon } from '../../../../net/fabricmc/fabric/impl/networking/server/ServerLoginNetworkAddon.d.ts'
import type { ServerLoginPacketListenerImplAccessor } from '../../../../net/fabricmc/fabric/mixin/networking/accessor/ServerLoginPacketListenerImplAccessor.d.ts'
import type { CrashReport } from '../../../../net/minecraft/CrashReport.d.ts'
import type { CrashReportCategory } from '../../../../net/minecraft/CrashReportCategory.d.ts'
import type { Connection } from '../../../../net/minecraft/network/Connection.d.ts'
import type { ConnectionProtocol } from '../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { DisconnectionDetails } from '../../../../net/minecraft/network/DisconnectionDetails.d.ts'
import type { PacketListener } from '../../../../net/minecraft/network/PacketListener.d.ts'
import type { TickablePacketListener } from '../../../../net/minecraft/network/TickablePacketListener.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ServerboundCookieResponsePacket } from '../../../../net/minecraft/network/protocol/cookie/ServerboundCookieResponsePacket.d.ts'
import type { ServerLoginPacketListener } from '../../../../net/minecraft/network/protocol/login/ServerLoginPacketListener.d.ts'
import type { ServerboundCustomQueryAnswerPacket } from '../../../../net/minecraft/network/protocol/login/ServerboundCustomQueryAnswerPacket.d.ts'
import type { ServerboundHelloPacket } from '../../../../net/minecraft/network/protocol/login/ServerboundHelloPacket.d.ts'
import type { ServerboundKeyPacket } from '../../../../net/minecraft/network/protocol/login/ServerboundKeyPacket.d.ts'
import type { ServerboundLoginAcknowledgedPacket } from '../../../../net/minecraft/network/protocol/login/ServerboundLoginAcknowledgedPacket.d.ts'
import type { MinecraftServer } from '../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerLoginPacketListenerImpl$State } from '../../../../net/minecraft/server/network/ServerLoginPacketListenerImpl$State.d.ts'
import type { ServerActivityMonitor } from '../../../../net/minecraft/server/notifications/ServerActivityMonitor.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class ServerLoginPacketListenerImpl extends Object implements PacketContextProvider, PacketCallbackListener, PacketListenerExtensions, ServerLoginPacketListenerImplAccessor, TickablePacketListener, ServerLoginPacketListener {
    static LOGGER: Logger;
    constructor(minecraftserver: MinecraftServer, connection: Connection, transferred: boolean)
    readonly addon: ServerLoginNetworkAddon;
    // private authenticatedProfile: GameProfile;
    // private challenge: number[];
    readonly connection: Connection;
    // private requestedUsername: string;
    readonly server: MinecraftServer;
    // private serverActivityMonitor: ServerActivityMonitor;
    // private serverId: string;
    // private state: ServerLoginPacketListenerImpl$State;
    // private tick: number;
    // private transferred: boolean;
    disconnect(component: Component): void;
    fillListenerSpecificCrashDetails(report: CrashReport, connectionDetails: CrashReportCategory): void;
    // private finishLoginAndWaitForClient(gameProfile: GameProfile): void;
    getAddon(): ServerLoginNetworkAddon;
    getPacketContext(): PacketContext;
    getPacketContext(): PacketContext;
    getUserName(): string;
    handleCookieResponse(packet: ServerboundCookieResponsePacket): void;
    handleCustomQueryPacket(packet: ServerboundCustomQueryAnswerPacket): void;
    handleHello(packet: ServerboundHelloPacket): void;
    handleKey(packet: ServerboundKeyPacket): void;
    handleLoginAcknowledgement(packet: ServerboundLoginAcknowledgedPacket): void;
    isAcceptingMessages(): boolean;
    // private isPlayerAlreadyInWorld(gameProfile: GameProfile): boolean;
    onDisconnect(details: DisconnectionDetails): void;
    protocol(): ConnectionProtocol;
    sent(arg0: Packet<PacketListener>): void;
    // private startClientVerification(profile: GameProfile): void;
    tick(): void;
    // private verifyLoginAndFinishConnectionSetup(profile: GameProfile): void;
}