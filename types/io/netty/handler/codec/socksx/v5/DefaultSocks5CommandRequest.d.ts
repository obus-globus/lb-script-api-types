import type { AbstractSocks5Message } from '../../../../../../io/netty/handler/codec/socksx/v5/AbstractSocks5Message.d.ts'
import type { Socks5AddressType } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5AddressType.d.ts'
import type { Socks5CommandRequest } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5CommandRequest.d.ts'
import type { Socks5CommandType } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5CommandType.d.ts'
export class DefaultSocks5CommandRequest extends AbstractSocks5Message implements Socks5CommandRequest {
    constructor(arg0: Socks5CommandType, arg1: Socks5AddressType, arg2: string, arg3: number)
    // private dstAddr: string;
    // private dstAddrType: Socks5AddressType;
    // private dstPort: number;
    // private type: Socks5CommandType;
    dstAddr(): string;
    dstAddrType(): Socks5AddressType;
    dstPort(): number;
    toString(): string;
    type(): Socks5CommandType;
}