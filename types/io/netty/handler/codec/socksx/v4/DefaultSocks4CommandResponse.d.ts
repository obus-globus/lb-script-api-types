import type { AbstractSocks4Message } from '../../../../../../io/netty/handler/codec/socksx/v4/AbstractSocks4Message.d.ts'
import type { Socks4CommandResponse } from '../../../../../../io/netty/handler/codec/socksx/v4/Socks4CommandResponse.d.ts'
import type { Socks4CommandStatus } from '../../../../../../io/netty/handler/codec/socksx/v4/Socks4CommandStatus.d.ts'
export class DefaultSocks4CommandResponse extends AbstractSocks4Message implements Socks4CommandResponse {
    constructor(arg0: Socks4CommandStatus)
    constructor(arg0: Socks4CommandStatus, arg1: string, arg2: number)
    // private dstAddr: string;
    // private dstPort: number;
    // private status: Socks4CommandStatus;
    dstAddr(): string;
    dstPort(): number;
    status(): Socks4CommandStatus;
    toString(): string;
}