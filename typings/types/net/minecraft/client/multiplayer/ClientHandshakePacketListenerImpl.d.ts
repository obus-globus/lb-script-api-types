import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { AtomicReference } from '../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Cipher } from '../../../../javax/crypto/Cipher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PacketContext } from '../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext.d.ts'
import type { PacketContextProvider } from '../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContextProvider.d.ts'
import type { PacketListenerExtensions } from '../../../../net/fabricmc/fabric/impl/networking/PacketListenerExtensions.d.ts'
import type { ClientLoginNetworkAddon } from '../../../../net/fabricmc/fabric/impl/networking/client/ClientLoginNetworkAddon.d.ts'
import type { ClientHandshakePacketListenerImplAccessor } from '../../../../net/fabricmc/fabric/mixin/networking/client/accessor/ClientHandshakePacketListenerImplAccessor.d.ts'
import type { CrashReport } from '../../../../net/minecraft/CrashReport.d.ts'
import type { CrashReportCategory } from '../../../../net/minecraft/CrashReportCategory.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { Screen } from '../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { ClientHandshakePacketListenerImpl$State } from '../../../../net/minecraft/client/multiplayer/ClientHandshakePacketListenerImpl$State.d.ts'
import type { LevelLoadTracker } from '../../../../net/minecraft/client/multiplayer/LevelLoadTracker.d.ts'
import type { PlayerInfo } from '../../../../net/minecraft/client/multiplayer/PlayerInfo.d.ts'
import type { ServerData } from '../../../../net/minecraft/client/multiplayer/ServerData.d.ts'
import type { TransferState } from '../../../../net/minecraft/client/multiplayer/TransferState.d.ts'
import type { Connection } from '../../../../net/minecraft/network/Connection.d.ts'
import type { ConnectionProtocol } from '../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { DisconnectionDetails } from '../../../../net/minecraft/network/DisconnectionDetails.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { ClientboundCookieRequestPacket } from '../../../../net/minecraft/network/protocol/cookie/ClientboundCookieRequestPacket.d.ts'
import type { ClientLoginPacketListener } from '../../../../net/minecraft/network/protocol/login/ClientLoginPacketListener.d.ts'
import type { ClientboundCustomQueryPacket } from '../../../../net/minecraft/network/protocol/login/ClientboundCustomQueryPacket.d.ts'
import type { ClientboundHelloPacket } from '../../../../net/minecraft/network/protocol/login/ClientboundHelloPacket.d.ts'
import type { ClientboundLoginCompressionPacket } from '../../../../net/minecraft/network/protocol/login/ClientboundLoginCompressionPacket.d.ts'
import type { ClientboundLoginDisconnectPacket } from '../../../../net/minecraft/network/protocol/login/ClientboundLoginDisconnectPacket.d.ts'
import type { ClientboundLoginFinishedPacket } from '../../../../net/minecraft/network/protocol/login/ClientboundLoginFinishedPacket.d.ts'
import type { ServerboundKeyPacket } from '../../../../net/minecraft/network/protocol/login/ServerboundKeyPacket.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class ClientHandshakePacketListenerImpl extends Object implements PacketContextProvider, PacketListenerExtensions, ClientHandshakePacketListenerImplAccessor, ClientLoginPacketListener {
    constructor(connection: Connection, minecraft: Minecraft, serverData: ServerData, parent: Screen, newWorld: boolean, worldLoadDuration: Duration, updateStatus: (param0: Component) => void, levelLoadTracker: LevelLoadTracker, transferState: TransferState)
    readonly addon: ClientLoginNetworkAddon;
    readonly connection: Connection;
    // private cookies: JavaMap<Identifier, number[]>;
    // private levelLoadTracker: LevelLoadTracker;
    // private minecraft: Minecraft;
    readonly minigameName: string;
    // private newWorld: boolean;
    // private parent: Screen;
    // private seenInsecureChatWarning: boolean;
    // private seenPlayers: JavaMap<UUID, PlayerInfo>;
    // private serverData: ServerData;
    // private state: AtomicReference<ClientHandshakePacketListenerImpl$State>;
    // private updateStatus: (param0: Component) => void;
    // private wasTransferredTo: boolean;
    // private worldLoadDuration: Duration;
    // private authenticateServer(digest: string): Component;
    fillListenerSpecificCrashDetails(report: CrashReport, connectionDetails: CrashReportCategory): void;
    getAddon(): ClientLoginNetworkAddon;
    getConnection(): Connection;
    getPacketContext(): PacketContext;
    handleCompression(packet: ClientboundLoginCompressionPacket): void;
    handleCustomQuery(packet: ClientboundCustomQueryPacket): void;
    handleDisconnect(packet: ClientboundLoginDisconnectPacket): void;
    handleHello(packet: ClientboundHelloPacket): void;
    handleLoginFinished(packet: ClientboundLoginFinishedPacket): void;
    handleRequestCookie(packet: ClientboundCookieRequestPacket): void;
    isAcceptingMessages(): boolean;
    onDisconnect(details: DisconnectionDetails): void;
    protocol(): ConnectionProtocol;
    // private setEncryption(setKeyPacket: ServerboundKeyPacket, decryptCipher: Cipher, encryptCipher: Cipher): void;
    setMinigameName(minigameName: string): void;
    // private switchState(toState: ClientHandshakePacketListenerImpl$State): void;
}