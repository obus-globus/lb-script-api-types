import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { ConfigurationPacketStorage$QueuedPacket } from '../../../../../../com/viaversion/viabackwards/protocol/v1_20_2to1_20/storage/ConfigurationPacketStorage$QueuedPacket.d.ts'
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { PacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketType.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class ConfigurationPacketStorage extends Object implements StorableObject {
    constructor()
    readonly finished: boolean;
    // private rawPackets: ConfigurationPacketStorage$QueuedPacket[];
    readonly resourcePack: ConfigurationPacketStorage$QueuedPacket;
    addRawPacket(arg0: PacketWrapper, arg1: PacketType): void;
    enabledFeatures(): string[];
    isFinished(): boolean;
    onRemove(): void;
    registry(): Map$Entry<string, Tag>[];
    sendQueuedPackets(arg0: UserConnection): void;
    setEnabledFeatures(arg0: string[]): void;
    setFinished(arg0: boolean): void;
    setRegistry(arg0: Map$Entry<string, Tag>[]): void;
    setResourcePack(arg0: PacketWrapper): void;
    // private toQueuedPacket(arg0: PacketWrapper, arg1: PacketType): ConfigurationPacketStorage$QueuedPacket;
}