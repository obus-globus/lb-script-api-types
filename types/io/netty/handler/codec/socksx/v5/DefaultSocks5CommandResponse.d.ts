import type { AbstractSocks5Message } from '../../../../../../io/netty/handler/codec/socksx/v5/AbstractSocks5Message.d.ts'
import type { Socks5AddressType } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5AddressType.d.ts'
import type { Socks5CommandResponse } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5CommandResponse.d.ts'
import type { Socks5CommandStatus } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5CommandStatus.d.ts'
export class DefaultSocks5CommandResponse extends AbstractSocks5Message implements Socks5CommandResponse {
    constructor(arg0: Socks5CommandStatus, arg1: Socks5AddressType)
    constructor(arg0: Socks5CommandStatus, arg1: Socks5AddressType, arg2: string, arg3: number)
    // private bndAddr: string;
    // private bndAddrType: Socks5AddressType;
    // private bndPort: number;
    // private status: Socks5CommandStatus;
    bndAddr(): string;
    bndAddrType(): Socks5AddressType;
    bndPort(): number;
    status(): Socks5CommandStatus;
    toString(): string;
}