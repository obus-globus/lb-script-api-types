import type { AbstractSocksMessage } from '../../../../../../io/netty/handler/codec/socksx/AbstractSocksMessage.d.ts'
import type { SocksVersion } from '../../../../../../io/netty/handler/codec/socksx/SocksVersion.d.ts'
import type { Socks4Message } from '../../../../../../io/netty/handler/codec/socksx/v4/Socks4Message.d.ts'
export abstract class AbstractSocks4Message extends AbstractSocksMessage implements Socks4Message {
    constructor()
    version(): SocksVersion;
}