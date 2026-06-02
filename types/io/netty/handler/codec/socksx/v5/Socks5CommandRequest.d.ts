import type { Socks5AddressType } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5AddressType.d.ts'
import type { Socks5CommandType } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5CommandType.d.ts'
import type { Socks5Message } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5Message.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Socks5CommandRequest extends Socks5Message, Object{
    dstAddr(): string;
    dstAddrType(): Socks5AddressType;
    dstPort(): number;
    type(): Socks5CommandType;
}