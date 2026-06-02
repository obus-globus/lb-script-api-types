import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { ReplayingDecoder } from '../../../../../io/netty/handler/codec/ReplayingDecoder.d.ts'
import type { SocksAddressType } from '../../../../../io/netty/handler/codec/socks/SocksAddressType.d.ts'
import type { SocksCmdRequestDecoder$State } from '../../../../../io/netty/handler/codec/socks/SocksCmdRequestDecoder$State.d.ts'
import type { SocksCmdType } from '../../../../../io/netty/handler/codec/socks/SocksCmdType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SocksCmdRequestDecoder extends ReplayingDecoder<SocksCmdRequestDecoder$State> {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor()
    // private addressType: SocksAddressType;
    // private cmdType: SocksCmdType;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
}