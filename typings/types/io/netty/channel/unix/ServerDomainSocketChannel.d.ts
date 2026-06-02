import type { ServerChannel } from '../../../../io/netty/channel/ServerChannel.d.ts'
import type { DomainSocketAddress } from '../../../../io/netty/channel/unix/DomainSocketAddress.d.ts'
import type { UnixChannel } from '../../../../io/netty/channel/unix/UnixChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ServerDomainSocketChannel extends ServerChannel, UnixChannel, Object{
    localAddress(): DomainSocketAddress;
    remoteAddress(): DomainSocketAddress;
}