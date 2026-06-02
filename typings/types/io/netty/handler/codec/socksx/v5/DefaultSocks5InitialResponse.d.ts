import type { AbstractSocks5Message } from '../../../../../../io/netty/handler/codec/socksx/v5/AbstractSocks5Message.d.ts'
import type { Socks5AuthMethod } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5AuthMethod.d.ts'
import type { Socks5InitialResponse } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5InitialResponse.d.ts'
export class DefaultSocks5InitialResponse extends AbstractSocks5Message implements Socks5InitialResponse {
    constructor(arg0: Socks5AuthMethod)
    // private authMethod: Socks5AuthMethod;
    authMethod(): Socks5AuthMethod;
    toString(): string;
}