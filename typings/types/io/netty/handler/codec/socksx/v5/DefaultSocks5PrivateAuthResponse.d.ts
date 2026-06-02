import type { AbstractSocks5Message } from '../../../../../../io/netty/handler/codec/socksx/v5/AbstractSocks5Message.d.ts'
import type { Socks5PrivateAuthResponse } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5PrivateAuthResponse.d.ts'
import type { Socks5PrivateAuthStatus } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5PrivateAuthStatus.d.ts'
export class DefaultSocks5PrivateAuthResponse extends AbstractSocks5Message implements Socks5PrivateAuthResponse {
    constructor(arg0: Socks5PrivateAuthStatus)
    // private status: Socks5PrivateAuthStatus;
    status(): Socks5PrivateAuthStatus;
    toString(): string;
}