import type { PacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketType.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ConfigurationState$QueuedPacket extends Object {
    private constructor(arg0: ByteBuf, arg1: boolean, arg2: PacketType, arg3: number, arg4: boolean)
    // private buf: ByteBuf;
    // private clientbound: boolean;
    // private packetId: number;
    // private packetType: PacketType;
    // private skipCurrentPipeline: boolean;
    buf(): ByteBuf;
    clientbound(): boolean;
    packetId(): number;
    packetType(): PacketType;
    skipCurrentPipeline(): boolean;
}