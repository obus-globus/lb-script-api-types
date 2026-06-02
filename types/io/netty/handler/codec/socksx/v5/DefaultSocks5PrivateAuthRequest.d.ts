import type { AbstractSocks5Message } from '../../../../../../io/netty/handler/codec/socksx/v5/AbstractSocks5Message.d.ts'
import type { Socks5PrivateAuthRequest } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5PrivateAuthRequest.d.ts'
export class DefaultSocks5PrivateAuthRequest extends AbstractSocks5Message implements Socks5PrivateAuthRequest {
    constructor(arg0: number[])
    // private privateToken: number[];
    privateToken(): number[];
    toString(): string;
}