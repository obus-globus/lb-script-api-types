import type { AbstractSocks5Message } from '../../../../../../io/netty/handler/codec/socksx/v5/AbstractSocks5Message.d.ts'
import type { Socks5PasswordAuthResponse } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5PasswordAuthResponse.d.ts'
import type { Socks5PasswordAuthStatus } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5PasswordAuthStatus.d.ts'
export class DefaultSocks5PasswordAuthResponse extends AbstractSocks5Message implements Socks5PasswordAuthResponse {
    constructor(arg0: Socks5PasswordAuthStatus)
    // private status: Socks5PasswordAuthStatus;
    status(): Socks5PasswordAuthStatus;
    toString(): string;
}