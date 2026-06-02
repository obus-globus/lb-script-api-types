import type { Socks5Message } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5Message.d.ts'
import type { Socks5PrivateAuthStatus } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5PrivateAuthStatus.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Socks5PrivateAuthResponse extends Socks5Message, Object{
    status(): Socks5PrivateAuthStatus;
}