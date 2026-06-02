import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { FabricServerConfigurationPacketListenerImpl } from '../../../../net/fabricmc/fabric/api/networking/v1/FabricServerConfigurationPacketListenerImpl.d.ts'
import type { PacketListenerExtensions } from '../../../../net/fabricmc/fabric/impl/networking/PacketListenerExtensions.d.ts'
import type { ServerConfigurationNetworkAddon } from '../../../../net/fabricmc/fabric/impl/networking/server/ServerConfigurationNetworkAddon.d.ts'
import type { Connection } from '../../../../net/minecraft/network/Connection.d.ts'
import type { ConnectionProtocol } from '../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { DisconnectionDetails } from '../../../../net/minecraft/network/DisconnectionDetails.d.ts'
import type { TickablePacketListener } from '../../../../net/minecraft/network/TickablePacketListener.d.ts'
import type { ServerboundClientInformationPacket } from '../../../../net/minecraft/network/protocol/common/ServerboundClientInformationPacket.d.ts'
import type { ServerboundResourcePackPacket } from '../../../../net/minecraft/network/protocol/common/ServerboundResourcePackPacket.d.ts'
import type { ServerConfigurationPacketListener } from '../../../../net/minecraft/network/protocol/configuration/ServerConfigurationPacketListener.d.ts'
import type { ServerboundAcceptCodeOfConductPacket } from '../../../../net/minecraft/network/protocol/configuration/ServerboundAcceptCodeOfConductPacket.d.ts'
import type { ServerboundFinishConfigurationPacket } from '../../../../net/minecraft/network/protocol/configuration/ServerboundFinishConfigurationPacket.d.ts'
import type { ServerboundSelectKnownPacks } from '../../../../net/minecraft/network/protocol/configuration/ServerboundSelectKnownPacks.d.ts'
import type { MinecraftServer } from '../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ClientInformation } from '../../../../net/minecraft/server/level/ClientInformation.d.ts'
import type { CommonListenerCookie } from '../../../../net/minecraft/server/network/CommonListenerCookie.d.ts'
import type { ConfigurationTask } from '../../../../net/minecraft/server/network/ConfigurationTask.d.ts'
import type { ConfigurationTask$Type } from '../../../../net/minecraft/server/network/ConfigurationTask$Type.d.ts'
import type { ServerCommonPacketListenerImpl } from '../../../../net/minecraft/server/network/ServerCommonPacketListenerImpl.d.ts'
import type { PrepareSpawnTask } from '../../../../net/minecraft/server/network/config/PrepareSpawnTask.d.ts'
import type { SynchronizeRegistriesTask } from '../../../../net/minecraft/server/network/config/SynchronizeRegistriesTask.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class ServerConfigurationPacketListenerImpl extends ServerCommonPacketListenerImpl implements FabricServerConfigurationPacketListenerImpl, PacketListenerExtensions, TickablePacketListener, ServerConfigurationPacketListener {
    static LATENCY_CHECK_INTERVAL: number;
    static LOGGER: Logger;
    constructor(server: MinecraftServer, connection: Connection, cookie: CommonListenerCookie)
    readonly addon: ServerConfigurationNetworkAddon;
    // private clientInformation: ClientInformation;
    // private configurationTasks: ConfigurationTask[];
    // private currentTask: ConfigurationTask;
    // private earlyTaskExecution: boolean;
    // private gameProfile: GameProfile;
    // private prepareSpawnTask: PrepareSpawnTask;
    // private sentConfiguration: boolean;
    // private synchronizeRegistriesTask: SynchronizeRegistriesTask;
    // private addOptionalTasks(): void;
    addTask(arg0: ConfigurationTask): void;
    addTask(arg0: ConfigurationTask): void;
    completeTask(arg0: ConfigurationTask$Type): void;
    completeTask(arg0: ConfigurationTask$Type): void;
    // private finishCurrentTask(taskTypeToFinish: ConfigurationTask$Type): void;
    getAddon(): ServerConfigurationNetworkAddon;
    handleAcceptCodeOfConduct(packet: ServerboundAcceptCodeOfConductPacket): void;
    handleClientInformation(packet: ServerboundClientInformationPacket): void;
    handleConfigurationFinished(packet: ServerboundFinishConfigurationPacket): void;
    handleResourcePackResponse(packet: ServerboundResourcePackPacket): void;
    handleSelectKnownPacks(packet: ServerboundSelectKnownPacks): void;
    isAcceptingMessages(): boolean;
    onDisconnect(details: DisconnectionDetails): void;
    playerProfile(): GameProfile;
    // private pollEarlyTasks(): boolean;
    protocol(): ConnectionProtocol;
    returnToWorld(): void;
    startConfiguration(): void;
    // private startNextTask(): void;
    tick(): void;
}