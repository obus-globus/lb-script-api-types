import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ConnectionProtocol } from '../../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { ClientCommonPacketListener } from '../../../../../net/minecraft/network/protocol/common/ClientCommonPacketListener.d.ts'
import type { ClientboundCodeOfConductPacket } from '../../../../../net/minecraft/network/protocol/configuration/ClientboundCodeOfConductPacket.d.ts'
import type { ClientboundFinishConfigurationPacket } from '../../../../../net/minecraft/network/protocol/configuration/ClientboundFinishConfigurationPacket.d.ts'
import type { ClientboundRegistryDataPacket } from '../../../../../net/minecraft/network/protocol/configuration/ClientboundRegistryDataPacket.d.ts'
import type { ClientboundResetChatPacket } from '../../../../../net/minecraft/network/protocol/configuration/ClientboundResetChatPacket.d.ts'
import type { ClientboundSelectKnownPacks } from '../../../../../net/minecraft/network/protocol/configuration/ClientboundSelectKnownPacks.d.ts'
import type { ClientboundUpdateEnabledFeaturesPacket } from '../../../../../net/minecraft/network/protocol/configuration/ClientboundUpdateEnabledFeaturesPacket.d.ts'
export interface ClientConfigurationPacketListener extends Object, ClientCommonPacketListener{
    handleCodeOfConduct(packet: ClientboundCodeOfConductPacket): void;
    handleConfigurationFinished(packet: ClientboundFinishConfigurationPacket): void;
    handleEnabledFeatures(packet: ClientboundUpdateEnabledFeaturesPacket): void;
    handleRegistryData(packet: ClientboundRegistryDataPacket): void;
    handleResetChat(packet: ClientboundResetChatPacket): void;
    handleSelectKnownPacks(packet: ClientboundSelectKnownPacks): void;
    protocol(): ConnectionProtocol;
}