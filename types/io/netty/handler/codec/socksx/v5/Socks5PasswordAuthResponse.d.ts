import type { Socks5Message } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5Message.d.ts'
import type { Socks5PasswordAuthStatus } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5PasswordAuthStatus.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Socks5PasswordAuthResponse extends Socks5Message, Object{
    status(): Socks5PasswordAuthStatus;
}