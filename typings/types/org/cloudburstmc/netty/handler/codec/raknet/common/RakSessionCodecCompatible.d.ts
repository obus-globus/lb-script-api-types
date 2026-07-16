import type { ChannelHandlerContext } from '../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { RakChannel } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/RakChannel.d.ts'
import type { EncapsulatedPacket } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/packet/EncapsulatedPacket.d.ts'
import type { RakSessionCodec } from '../../../../../../../org/cloudburstmc/netty/handler/codec/raknet/common/RakSessionCodec.d.ts'
export class RakSessionCodecCompatible extends RakSessionCodec {
    static NAME: string;
    constructor(arg0: RakChannel)
    createEncapsulatedPacket(): EncapsulatedPacket;
    writePing(arg0: ChannelHandlerContext, arg1: number): void;
}