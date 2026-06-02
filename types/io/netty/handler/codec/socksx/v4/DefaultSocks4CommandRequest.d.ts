import type { AbstractSocks4Message } from '../../../../../../io/netty/handler/codec/socksx/v4/AbstractSocks4Message.d.ts'
import type { Socks4CommandRequest } from '../../../../../../io/netty/handler/codec/socksx/v4/Socks4CommandRequest.d.ts'
import type { Socks4CommandType } from '../../../../../../io/netty/handler/codec/socksx/v4/Socks4CommandType.d.ts'
export class DefaultSocks4CommandRequest extends AbstractSocks4Message implements Socks4CommandRequest {
    constructor(arg0: Socks4CommandType, arg1: string, arg2: number)
    constructor(arg0: Socks4CommandType, arg1: string, arg2: number, arg3: string)
    // private dstAddr: string;
    // private dstPort: number;
    // private type: Socks4CommandType;
    // private userId: string;
    dstAddr(): string;
    dstPort(): number;
    toString(): string;
    type(): Socks4CommandType;
    userId(): string;
}