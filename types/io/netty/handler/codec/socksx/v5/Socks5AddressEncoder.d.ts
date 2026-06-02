import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Socks5AddressType } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5AddressType.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Socks5AddressEncoder extends Object{
    encodeAddress(arg0: Socks5AddressType, arg1: string, arg2: ByteBuf): void;
}