import type { PacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketType.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ConfigurationPacketStorage$QueuedPacket extends Record {
    constructor(buf: ByteBuf, packetType: PacketType)
    // private buf: ByteBuf;
    // private packetType: PacketType;
    buf(): ByteBuf;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    packetType(): PacketType;
    toString(): string;
}