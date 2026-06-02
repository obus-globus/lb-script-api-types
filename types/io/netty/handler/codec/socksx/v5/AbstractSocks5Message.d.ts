import type { AbstractSocksMessage } from '../../../../../../io/netty/handler/codec/socksx/AbstractSocksMessage.d.ts'
import type { SocksVersion } from '../../../../../../io/netty/handler/codec/socksx/SocksVersion.d.ts'
import type { Socks5Message } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5Message.d.ts'
export abstract class AbstractSocks5Message extends AbstractSocksMessage implements Socks5Message {
    constructor()
    version(): SocksVersion;
}