import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientboundCodeOfConductPacket } from '../../../../../net/minecraft/network/protocol/configuration/ClientboundCodeOfConductPacket.d.ts'
import type { ClientboundFinishConfigurationPacket } from '../../../../../net/minecraft/network/protocol/configuration/ClientboundFinishConfigurationPacket.d.ts'
import type { ClientboundRegistryDataPacket } from '../../../../../net/minecraft/network/protocol/configuration/ClientboundRegistryDataPacket.d.ts'
import type { ClientboundResetChatPacket } from '../../../../../net/minecraft/network/protocol/configuration/ClientboundResetChatPacket.d.ts'
import type { ClientboundSelectKnownPacks } from '../../../../../net/minecraft/network/protocol/configuration/ClientboundSelectKnownPacks.d.ts'
import type { ClientboundUpdateEnabledFeaturesPacket } from '../../../../../net/minecraft/network/protocol/configuration/ClientboundUpdateEnabledFeaturesPacket.d.ts'
import type { ServerboundAcceptCodeOfConductPacket } from '../../../../../net/minecraft/network/protocol/configuration/ServerboundAcceptCodeOfConductPacket.d.ts'
import type { ServerboundFinishConfigurationPacket } from '../../../../../net/minecraft/network/protocol/configuration/ServerboundFinishConfigurationPacket.d.ts'
import type { ServerboundSelectKnownPacks } from '../../../../../net/minecraft/network/protocol/configuration/ServerboundSelectKnownPacks.d.ts'
export class ConfigurationPacketTypes extends Object {
    static CLIENTBOUND_CODE_OF_CONDUCT: PacketType<ClientboundCodeOfConductPacket>;
    static CLIENTBOUND_FINISH_CONFIGURATION: PacketType<ClientboundFinishConfigurationPacket>;
    static CLIENTBOUND_REGISTRY_DATA: PacketType<ClientboundRegistryDataPacket>;
    static CLIENTBOUND_RESET_CHAT: PacketType<ClientboundResetChatPacket>;
    static CLIENTBOUND_SELECT_KNOWN_PACKS: PacketType<ClientboundSelectKnownPacks>;
    static CLIENTBOUND_UPDATE_ENABLED_FEATURES: PacketType<ClientboundUpdateEnabledFeaturesPacket>;
    static SERVERBOUND_ACCEPT_CODE_OF_CONDUCT: PacketType<ServerboundAcceptCodeOfConductPacket>;
    static SERVERBOUND_FINISH_CONFIGURATION: PacketType<ServerboundFinishConfigurationPacket>;
    static SERVERBOUND_SELECT_KNOWN_PACKS: PacketType<ServerboundSelectKnownPacks>;
    constructor()
}