import type { DuplexChannel } from '../../../../io/netty/channel/socket/DuplexChannel.d.ts'
import type { DomainSocketAddress } from '../../../../io/netty/channel/unix/DomainSocketAddress.d.ts'
import type { DomainSocketChannelConfig } from '../../../../io/netty/channel/unix/DomainSocketChannelConfig.d.ts'
import type { UnixChannel } from '../../../../io/netty/channel/unix/UnixChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DomainSocketChannel extends DuplexChannel, UnixChannel, Object{
    config(): DomainSocketChannelConfig;
    localAddress(): DomainSocketAddress;
    remoteAddress(): DomainSocketAddress;
}