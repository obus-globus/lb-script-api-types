import type { Socks5AuthMethod } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5AuthMethod.d.ts'
import type { Socks5Message } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5Message.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Socks5InitialRequest extends Socks5Message, Object{
    authMethods(): Socks5AuthMethod[];
}