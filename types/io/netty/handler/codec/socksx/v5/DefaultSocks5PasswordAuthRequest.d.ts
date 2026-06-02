import type { AbstractSocks5Message } from '../../../../../../io/netty/handler/codec/socksx/v5/AbstractSocks5Message.d.ts'
import type { Socks5PasswordAuthRequest } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5PasswordAuthRequest.d.ts'
export class DefaultSocks5PasswordAuthRequest extends AbstractSocks5Message implements Socks5PasswordAuthRequest {
    constructor(arg0: string, arg1: string)
    // private password: string;
    // private username: string;
    password(): string;
    toString(): string;
    username(): string;
}