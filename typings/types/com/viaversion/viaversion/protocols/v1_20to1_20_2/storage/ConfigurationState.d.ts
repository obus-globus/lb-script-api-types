import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ConfigurationState$BridgePhase } from '../../../../../../com/viaversion/viaversion/protocols/v1_20to1_20_2/storage/ConfigurationState$BridgePhase.d.ts'
import type { ConfigurationState$ClientInformation } from '../../../../../../com/viaversion/viaversion/protocols/v1_20to1_20_2/storage/ConfigurationState$ClientInformation.d.ts'
import type { ConfigurationState$QueuedPacket } from '../../../../../../com/viaversion/viaversion/protocols/v1_20to1_20_2/storage/ConfigurationState$QueuedPacket.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class ConfigurationState extends Object implements StorableObject {
    constructor()
    readonly bridgePhase: ConfigurationState$BridgePhase;
    readonly clientInformation: ConfigurationState$ClientInformation;
    readonly joinGamePacket: ConfigurationState$QueuedPacket;
    // private lastDimensionRegistry: Map$Entry<string, Tag>[];
    // private packetQueue: ConfigurationState$QueuedPacket[];
    // private queuedJoinGame: boolean;
    // private queuedServerboundBytes: number;
    // private queuedServerboundPackets: number;
    addClientboundPacketToQueue(arg0: PacketWrapper): void;
    addServerboundPacketToQueue(arg0: PacketWrapper): void;
    bridgePhase(): ConfigurationState$BridgePhase;
    clear(): void;
    clientInformationPacket(arg0: UserConnection): PacketWrapper;
    lastDimensionRegistry(): Map$Entry<string, Tag>[];
    onRemove(): void;
    queuedOrSentJoinGame(): boolean;
    sendQueuedPackets(arg0: UserConnection): void;
    setBridgePhase(arg0: ConfigurationState$BridgePhase): void;
    setClientInformation(arg0: ConfigurationState$ClientInformation): void;
    setJoinGamePacket(arg0: PacketWrapper): void;
    setLastDimensionRegistry(arg0: Map$Entry<string, Tag>[]): boolean;
    // private toQueuedPacket(arg0: PacketWrapper, arg1: boolean, arg2: boolean): ConfigurationState$QueuedPacket;
}