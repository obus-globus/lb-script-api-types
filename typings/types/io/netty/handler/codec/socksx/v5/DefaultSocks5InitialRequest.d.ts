import type { AbstractSocks5Message } from '../../../../../../io/netty/handler/codec/socksx/v5/AbstractSocks5Message.d.ts'
import type { Socks5AuthMethod } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5AuthMethod.d.ts'
import type { Socks5InitialRequest } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5InitialRequest.d.ts'
export class DefaultSocks5InitialRequest extends AbstractSocks5Message implements Socks5InitialRequest {
    constructor(...arg0: Socks5AuthMethod[])
    constructor(arg0: Socks5AuthMethod[])
    // private authMethods: Socks5AuthMethod[];
    authMethods(): Socks5AuthMethod[];
    toString(): string;
}