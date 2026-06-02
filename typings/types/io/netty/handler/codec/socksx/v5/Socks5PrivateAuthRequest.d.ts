import type { Socks5Message } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5Message.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Socks5PrivateAuthRequest extends Socks5Message, Object{
    privateToken(): number[];
}