import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelOption } from '../../../../io/netty/channel/ChannelOption.d.ts'
import type { MessageSizeEstimator } from '../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { AcceptFilter } from '../../../../io/netty/channel/kqueue/AcceptFilter.d.ts'
import type { DomainSocketReadMode } from '../../../../io/netty/channel/unix/DomainSocketReadMode.d.ts'
import type { UnixChannelOption } from '../../../../io/netty/channel/unix/UnixChannelOption.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { NetworkInterface } from '../../../../java/net/NetworkInterface.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class KQueueChannelOption<T extends unknown> extends UnixChannelOption<T> {
    static ALLOCATOR: ChannelOption<ByteBufAllocator>;
    static ALLOW_HALF_CLOSURE: ChannelOption<boolean>;
    static AUTO_CLOSE: ChannelOption<boolean>;
    static AUTO_READ: ChannelOption<boolean>;
    static CONNECT_TIMEOUT_MILLIS: ChannelOption<number>;
    static DATAGRAM_CHANNEL_ACTIVE_ON_REGISTRATION: ChannelOption<boolean>;
    static DOMAIN_SOCKET_READ_MODE: ChannelOption<DomainSocketReadMode>;
    static IP_MULTICAST_ADDR: ChannelOption<InetAddress>;
    static IP_MULTICAST_IF: ChannelOption<NetworkInterface>;
    static IP_MULTICAST_LOOP_DISABLED: ChannelOption<boolean>;
    static IP_MULTICAST_TTL: ChannelOption<number>;
    static IP_TOS: ChannelOption<number>;
    static MAX_MESSAGES_PER_READ: ChannelOption<number>;
    static MAX_MESSAGES_PER_WRITE: ChannelOption<number>;
    static MESSAGE_SIZE_ESTIMATOR: ChannelOption<MessageSizeEstimator>;
    static RCVBUF_ALLOCATOR: ChannelOption<RecvByteBufAllocator>;
    static RCV_ALLOC_TRANSPORT_PROVIDES_GUESS: ChannelOption<boolean>;
    static RECVBUF_ALLOCATOR: ChannelOption<RecvByteBufAllocator>;
    static SINGLE_EVENTEXECUTOR_PER_GROUP: ChannelOption<boolean>;
    static SO_ACCEPTFILTER: ChannelOption<AcceptFilter>;
    static SO_BACKLOG: ChannelOption<number>;
    static SO_BROADCAST: ChannelOption<boolean>;
    static SO_KEEPALIVE: ChannelOption<boolean>;
    static SO_LINGER: ChannelOption<number>;
    static SO_RCVBUF: ChannelOption<number>;
    static SO_REUSEADDR: ChannelOption<boolean>;
    static SO_REUSEPORT: ChannelOption<boolean>;
    static SO_SNDBUF: ChannelOption<number>;
    static SO_SNDLOWAT: ChannelOption<number>;
    static SO_TIMEOUT: ChannelOption<number>;
    static TCP_FASTOPEN: ChannelOption<number>;
    static TCP_FASTOPEN_CONNECT: ChannelOption<boolean>;
    static TCP_NODELAY: ChannelOption<boolean>;
    static TCP_NOPUSH: ChannelOption<boolean>;
    static WRITE_BUFFER_HIGH_WATER_MARK: ChannelOption<number>;
    static WRITE_BUFFER_LOW_WATER_MARK: ChannelOption<number>;
    static WRITE_BUFFER_WATER_MARK: ChannelOption<WriteBufferWaterMark>;
    static WRITE_SPIN_COUNT: ChannelOption<number>;
    static exists(paramarg0: string): boolean;
    static newInstance(paramarg0: string): ChannelOption<Object>;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): ChannelOption<Object>;
    static valueOf(paramarg0: string): ChannelOption<Object>;
    private constructor()
}