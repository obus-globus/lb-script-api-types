import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ConnectionProtocol } from '../../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { ServerCommonPacketListener } from '../../../../../net/minecraft/network/protocol/common/ServerCommonPacketListener.d.ts'
import type { ServerboundAcceptCodeOfConductPacket } from '../../../../../net/minecraft/network/protocol/configuration/ServerboundAcceptCodeOfConductPacket.d.ts'
import type { ServerboundFinishConfigurationPacket } from '../../../../../net/minecraft/network/protocol/configuration/ServerboundFinishConfigurationPacket.d.ts'
import type { ServerboundSelectKnownPacks } from '../../../../../net/minecraft/network/protocol/configuration/ServerboundSelectKnownPacks.d.ts'
export interface ServerConfigurationPacketListener extends Object, ServerCommonPacketListener{
    handleAcceptCodeOfConduct(packet: ServerboundAcceptCodeOfConductPacket): void;
    handleConfigurationFinished(packet: ServerboundFinishConfigurationPacket): void;
    handleSelectKnownPacks(packet: ServerboundSelectKnownPacks): void;
    protocol(): ConnectionProtocol;
}