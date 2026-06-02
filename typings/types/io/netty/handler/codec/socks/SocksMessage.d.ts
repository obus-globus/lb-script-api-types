import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { SocksMessageType } from '../../../../../io/netty/handler/codec/socks/SocksMessageType.d.ts'
import type { SocksProtocolVersion } from '../../../../../io/netty/handler/codec/socks/SocksProtocolVersion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class SocksMessage extends Object {
    constructor(arg0: SocksMessageType)
    // private protocolVersion: SocksProtocolVersion;
    // private type: SocksMessageType;
    encodeAsByteBuf(arg0: ByteBuf): void;
    protocolVersion(): SocksProtocolVersion;
    type(): SocksMessageType;
}