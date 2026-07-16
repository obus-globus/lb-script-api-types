import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelOption } from '../../../../../../io/netty/channel/ChannelOption.d.ts'
import type { MessageSizeEstimator } from '../../../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { InetAddress } from '../../../../../../java/net/InetAddress.d.ts'
import type { NetworkInterface } from '../../../../../../java/net/NetworkInterface.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RakChannelMetrics } from '../../../../../../org/cloudburstmc/netty/channel/raknet/config/RakChannelMetrics.d.ts'
import type { RakServerMetrics } from '../../../../../../org/cloudburstmc/netty/channel/raknet/config/RakServerMetrics.d.ts'
export class RakChannelOption<T extends unknown> extends ChannelOption<T> {
    static ALLOCATOR: ChannelOption<ByteBufAllocator>;
    static ALLOW_HALF_CLOSURE: ChannelOption<boolean>;
    static AUTO_CLOSE: ChannelOption<boolean>;
    static AUTO_READ: ChannelOption<boolean>;
    static CONNECT_TIMEOUT_MILLIS: ChannelOption<number>;
    static DATAGRAM_CHANNEL_ACTIVE_ON_REGISTRATION: ChannelOption<boolean>;
    static IP_MULTICAST_ADDR: ChannelOption<InetAddress>;
    static IP_MULTICAST_IF: ChannelOption<NetworkInterface>;
    static IP_MULTICAST_LOOP_DISABLED: ChannelOption<boolean>;
    static IP_MULTICAST_TTL: ChannelOption<number>;
    static IP_TOS: ChannelOption<number>;
    static MAX_MESSAGES_PER_READ: ChannelOption<number>;
    static MAX_MESSAGES_PER_WRITE: ChannelOption<number>;
    static MESSAGE_SIZE_ESTIMATOR: ChannelOption<MessageSizeEstimator>;
    static RAK_ADVERTISEMENT: ChannelOption<ByteBuf>;
    static RAK_AUTO_FLUSH: ChannelOption<boolean>;
    static RAK_CLIENT_INTERNAL_ADDRESSES: ChannelOption<number>;
    static RAK_COMPATIBILITY_MODE: ChannelOption<boolean>;
    static RAK_CONNECT_TIMEOUT: ChannelOption<number>;
    static RAK_FLUSH_INTERVAL: ChannelOption<number>;
    static RAK_GLOBAL_PACKET_LIMIT: ChannelOption<number>;
    static RAK_GUID: ChannelOption<number>;
    static RAK_HANDLE_PING: ChannelOption<boolean>;
    static RAK_IP_DONT_FRAGMENT: ChannelOption<boolean>;
    static RAK_MAX_CHANNELS: ChannelOption<number>;
    static RAK_MAX_CONNECTIONS: ChannelOption<number>;
    static RAK_MAX_MTU: ChannelOption<number>;
    static RAK_METRICS: ChannelOption<RakChannelMetrics>;
    static RAK_MIN_MTU: ChannelOption<number>;
    static RAK_MTU: ChannelOption<number>;
    static RAK_MTU_SIZES: ChannelOption<number[]>;
    static RAK_ORDERING_CHANNELS: ChannelOption<number>;
    static RAK_PACKET_LIMIT: ChannelOption<number>;
    static RAK_PROTOCOL_VERSION: ChannelOption<number>;
    static RAK_REMOTE_GUID: ChannelOption<number>;
    static RAK_SEND_COOKIE: ChannelOption<boolean>;
    static RAK_SERVER_METRICS: ChannelOption<RakServerMetrics>;
    static RAK_SESSION_TIMEOUT: ChannelOption<number>;
    static RAK_SUPPORTED_PROTOCOLS: ChannelOption<number[]>;
    static RAK_TIME_BETWEEN_SEND_CONNECTION_ATTEMPTS_MS: ChannelOption<number>;
    static RAK_UNCONNECTED_MAGIC: ChannelOption<ByteBuf>;
    static RCVBUF_ALLOCATOR: ChannelOption<RecvByteBufAllocator>;
    static RECVBUF_ALLOCATOR: ChannelOption<RecvByteBufAllocator>;
    static SINGLE_EVENTEXECUTOR_PER_GROUP: ChannelOption<boolean>;
    static SO_BACKLOG: ChannelOption<number>;
    static SO_BROADCAST: ChannelOption<boolean>;
    static SO_KEEPALIVE: ChannelOption<boolean>;
    static SO_LINGER: ChannelOption<number>;
    static SO_RCVBUF: ChannelOption<number>;
    static SO_REUSEADDR: ChannelOption<boolean>;
    static SO_SNDBUF: ChannelOption<number>;
    static SO_TIMEOUT: ChannelOption<number>;
    static TCP_FASTOPEN: ChannelOption<number>;
    static TCP_FASTOPEN_CONNECT: ChannelOption<boolean>;
    static TCP_NODELAY: ChannelOption<boolean>;
    static WRITE_BUFFER_HIGH_WATER_MARK: ChannelOption<number>;
    static WRITE_BUFFER_LOW_WATER_MARK: ChannelOption<number>;
    static WRITE_BUFFER_WATER_MARK: ChannelOption<WriteBufferWaterMark>;
    static WRITE_SPIN_COUNT: ChannelOption<number>;
    static exists(paramarg0: string): boolean;
    static newInstance<T extends unknown>(paramarg0: string): ChannelOption<T>;
    static valueOf<T extends unknown>(paramarg0: Class<Object>, paramarg1: string): ChannelOption<T>;
    static valueOf<T extends unknown>(paramarg0: string): ChannelOption<T>;
    constructor()
}