import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelOption } from '../../../../io/netty/channel/ChannelOption.d.ts'
import type { MessageSizeEstimator } from '../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { EpollMode } from '../../../../io/netty/channel/epoll/EpollMode.d.ts'
import type { DomainSocketReadMode } from '../../../../io/netty/channel/unix/DomainSocketReadMode.d.ts'
import type { UnixChannelOption } from '../../../../io/netty/channel/unix/UnixChannelOption.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { NetworkInterface } from '../../../../java/net/NetworkInterface.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EpollChannelOption<T extends unknown> extends UnixChannelOption<T> {
    static ALLOCATOR: ChannelOption<ByteBufAllocator>;
    static ALLOW_HALF_CLOSURE: ChannelOption<boolean>;
    static AUTO_CLOSE: ChannelOption<boolean>;
    static AUTO_READ: ChannelOption<boolean>;
    static CONNECT_TIMEOUT_MILLIS: ChannelOption<number>;
    static DATAGRAM_CHANNEL_ACTIVE_ON_REGISTRATION: ChannelOption<boolean>;
    static DOMAIN_SOCKET_READ_MODE: ChannelOption<DomainSocketReadMode>;
    static EPOLL_MODE: ChannelOption<EpollMode>;
    static IP_BIND_ADDRESS_NO_PORT: ChannelOption<boolean>;
    static IP_FREEBIND: ChannelOption<boolean>;
    static IP_MULTICAST_ADDR: ChannelOption<InetAddress>;
    static IP_MULTICAST_ALL: ChannelOption<boolean>;
    static IP_MULTICAST_IF: ChannelOption<NetworkInterface>;
    static IP_MULTICAST_LOOP_DISABLED: ChannelOption<boolean>;
    static IP_MULTICAST_TTL: ChannelOption<number>;
    static IP_RECVORIGDSTADDR: ChannelOption<boolean>;
    static IP_TOS: ChannelOption<number>;
    static IP_TRANSPARENT: ChannelOption<boolean>;
    static MAX_DATAGRAM_PAYLOAD_SIZE: ChannelOption<number>;
    static MAX_MESSAGES_PER_READ: ChannelOption<number>;
    static MAX_MESSAGES_PER_WRITE: ChannelOption<number>;
    static MESSAGE_SIZE_ESTIMATOR: ChannelOption<MessageSizeEstimator>;
    static RCVBUF_ALLOCATOR: ChannelOption<RecvByteBufAllocator>;
    static RECVBUF_ALLOCATOR: ChannelOption<RecvByteBufAllocator>;
    static SINGLE_EVENTEXECUTOR_PER_GROUP: ChannelOption<boolean>;
    static SO_BACKLOG: ChannelOption<number>;
    static SO_BROADCAST: ChannelOption<boolean>;
    static SO_BUSY_POLL: ChannelOption<number>;
    static SO_KEEPALIVE: ChannelOption<boolean>;
    static SO_LINGER: ChannelOption<number>;
    static SO_RCVBUF: ChannelOption<number>;
    static SO_REUSEADDR: ChannelOption<boolean>;
    static SO_REUSEPORT: ChannelOption<boolean>;
    static SO_SNDBUF: ChannelOption<number>;
    static SO_TIMEOUT: ChannelOption<number>;
    static TCP_CORK: ChannelOption<boolean>;
    static TCP_DEFER_ACCEPT: ChannelOption<number>;
    static TCP_FASTOPEN: ChannelOption<number>;
    static TCP_FASTOPEN_CONNECT: ChannelOption<boolean>;
    static TCP_KEEPCNT: ChannelOption<number>;
    static TCP_KEEPIDLE: ChannelOption<number>;
    static TCP_KEEPINTVL: ChannelOption<number>;
    static TCP_MD5SIG: ChannelOption<JavaMap<InetAddress, number[]>>;
    static TCP_NODELAY: ChannelOption<boolean>;
    static TCP_NOTSENT_LOWAT: ChannelOption<number>;
    static TCP_QUICKACK: ChannelOption<boolean>;
    static TCP_USER_TIMEOUT: ChannelOption<number>;
    static UDP_GRO: ChannelOption<boolean>;
    static WRITE_BUFFER_HIGH_WATER_MARK: ChannelOption<number>;
    static WRITE_BUFFER_LOW_WATER_MARK: ChannelOption<number>;
    static WRITE_BUFFER_WATER_MARK: ChannelOption<WriteBufferWaterMark>;
    static WRITE_SPIN_COUNT: ChannelOption<number>;
    static exists(paramarg0: string): boolean;
    static newInstance<T extends unknown>(paramarg0: string): ChannelOption<T>;
    static valueOf<T extends unknown>(paramarg0: Class<Object>, paramarg1: string): ChannelOption<T>;
    static valueOf<T extends unknown>(paramarg0: string): ChannelOption<T>;
    private constructor()
}