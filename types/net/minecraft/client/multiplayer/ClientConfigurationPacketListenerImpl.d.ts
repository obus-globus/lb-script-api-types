import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PacketListenerExtensions } from '../../../../net/fabricmc/fabric/impl/networking/PacketListenerExtensions.d.ts'
import type { ClientConfigurationNetworkAddon } from '../../../../net/fabricmc/fabric/impl/networking/client/ClientConfigurationNetworkAddon.d.ts'
import type { ClientConfigurationPacketListenerImplAccessor } from '../../../../net/fabricmc/fabric/mixin/networking/client/accessor/ClientConfigurationPacketListenerImplAccessor.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { ChatComponent$State } from '../../../../net/minecraft/client/gui/components/ChatComponent$State.d.ts'
import type { DialogConnectionAccess } from '../../../../net/minecraft/client/gui/screens/dialog/DialogConnectionAccess.d.ts'
import type { ClientCommonPacketListenerImpl } from '../../../../net/minecraft/client/multiplayer/ClientCommonPacketListenerImpl.d.ts'
import type { CommonListenerCookie } from '../../../../net/minecraft/client/multiplayer/CommonListenerCookie.d.ts'
import type { KnownPacksManager } from '../../../../net/minecraft/client/multiplayer/KnownPacksManager.d.ts'
import type { LevelLoadTracker } from '../../../../net/minecraft/client/multiplayer/LevelLoadTracker.d.ts'
import type { RegistryDataCollector } from '../../../../net/minecraft/client/multiplayer/RegistryDataCollector.d.ts'
import type { RegistryAccess$Frozen } from '../../../../net/minecraft/core/RegistryAccess$Frozen.d.ts'
import type { Connection } from '../../../../net/minecraft/network/Connection.d.ts'
import type { ConnectionProtocol } from '../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { DisconnectionDetails } from '../../../../net/minecraft/network/DisconnectionDetails.d.ts'
import type { TickablePacketListener } from '../../../../net/minecraft/network/TickablePacketListener.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { ClientboundUpdateTagsPacket } from '../../../../net/minecraft/network/protocol/common/ClientboundUpdateTagsPacket.d.ts'
import type { CustomPacketPayload } from '../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { ClientConfigurationPacketListener } from '../../../../net/minecraft/network/protocol/configuration/ClientConfigurationPacketListener.d.ts'
import type { ClientboundCodeOfConductPacket } from '../../../../net/minecraft/network/protocol/configuration/ClientboundCodeOfConductPacket.d.ts'
import type { ClientboundFinishConfigurationPacket } from '../../../../net/minecraft/network/protocol/configuration/ClientboundFinishConfigurationPacket.d.ts'
import type { ClientboundRegistryDataPacket } from '../../../../net/minecraft/network/protocol/configuration/ClientboundRegistryDataPacket.d.ts'
import type { ClientboundResetChatPacket } from '../../../../net/minecraft/network/protocol/configuration/ClientboundResetChatPacket.d.ts'
import type { ClientboundSelectKnownPacks } from '../../../../net/minecraft/network/protocol/configuration/ClientboundSelectKnownPacks.d.ts'
import type { ClientboundUpdateEnabledFeaturesPacket } from '../../../../net/minecraft/network/protocol/configuration/ClientboundUpdateEnabledFeaturesPacket.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceProvider } from '../../../../net/minecraft/server/packs/resources/ResourceProvider.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
export class ClientConfigurationPacketListenerImpl extends ClientCommonPacketListenerImpl implements PacketListenerExtensions, ClientConfigurationPacketListenerImplAccessor, TickablePacketListener, ClientConfigurationPacketListener {
    static DISCONNECTED_MESSAGE: Component;
    constructor(minecraft: Minecraft, connection: Connection, cookie: CommonListenerCookie)
    readonly addon: ClientConfigurationNetworkAddon;
    // private chatState: ChatComponent$State;
    // private enabledFeatures: FeatureFlagSet;
    // private knownPacks: KnownPacksManager;
    // private levelLoadTracker: LevelLoadTracker;
    readonly localGameProfile: GameProfile;
    // private receivedRegistries: RegistryAccess$Frozen;
    // private registryDataCollector: RegistryDataCollector;
    // private seenCodeOfConduct: boolean;
    createDialogAccess(): DialogConnectionAccess;
    getAddon(): ClientConfigurationNetworkAddon;
    handleCodeOfConduct(packet: ClientboundCodeOfConductPacket): void;
    handleConfigurationFinished(packet: ClientboundFinishConfigurationPacket): void;
    handleCustomPayload(payload: CustomPacketPayload): void;
    handleEnabledFeatures(packet: ClientboundUpdateEnabledFeaturesPacket): void;
    handleRegistryData(packet: ClientboundRegistryDataPacket): void;
    handleResetChat(packet: ClientboundResetChatPacket): void;
    handleSelectKnownPacks(packet: ClientboundSelectKnownPacks): void;
    // private handleUnknownCustomPayload(payload: CustomPacketPayload): void;
    handleUpdateTags(packet: ClientboundUpdateTagsPacket): void;
    isAcceptingMessages(): boolean;
    onDisconnect(reason: DisconnectionDetails): void;
    protocol(): ConnectionProtocol;
    // private runWithResources<T extends Object | number | string | boolean>(operation: (param0: (param0: Identifier) => java.util.Optional<net.minecraft.server.packs.resources.Resource>) => T): T;
    tick(): void;
}