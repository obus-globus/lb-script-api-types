import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelOption } from '../../../../../../io/netty/channel/ChannelOption.d.ts'
import type { DefaultChannelConfig } from '../../../../../../io/netty/channel/DefaultChannelConfig.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RakServerChannel } from '../../../../../../org/cloudburstmc/netty/channel/raknet/RakServerChannel.d.ts'
import type { RakServerChannelConfig } from '../../../../../../org/cloudburstmc/netty/channel/raknet/config/RakServerChannelConfig.d.ts'
import type { RakServerMetrics } from '../../../../../../org/cloudburstmc/netty/channel/raknet/config/RakServerMetrics.d.ts'
export class DefaultRakServerConfig extends DefaultChannelConfig implements RakServerChannelConfig {
    constructor(arg0: RakServerChannel)
    readonly advertisement: ByteBuf;
    readonly globalPacketLimit: number;
    readonly guid: number;
    readonly handlePing: boolean;
    readonly ipDontFragment: boolean;
    readonly maxChannels: number;
    readonly maxConnections: number;
    readonly maxMtu: number;
    readonly metrics: RakServerMetrics;
    readonly minMtu: number;
    readonly packetLimit: number;
    readonly sendCookie: boolean;
    readonly supportedProtocols: number[];
    readonly unconnectedMagic: ByteBuf;
    getAdvertisement(): ByteBuf;
    getGlobalPacketLimit(): number;
    getGuid(): number;
    getHandlePing(): boolean;
    getIpDontFragment(): boolean;
    getMaxChannels(): number;
    getMaxConnections(): number;
    getMaxMtu(): number;
    getMetrics(): RakServerMetrics;
    getMinMtu(): number;
    getOption<T extends unknown>(arg0: ChannelOption<T>): T;
    getOptions(): Map<ChannelOption<Object>, Object>;
    getOptions(arg0: Map<ChannelOption<Object>, Object>, ...arg1: ChannelOption<Object>[]): Map<ChannelOption<Object>, Object>;
    getPacketLimit(): number;
    getSendCookie(): boolean;
    getSupportedProtocols(): number[];
    getUnconnectedMagic(): ByteBuf;
    setAdvertisement(arg0: ByteBuf): RakServerChannelConfig;
    setGlobalPacketLimit(arg0: number): void;
    setGuid(arg0: number): RakServerChannelConfig;
    setHandlePing(arg0: boolean): RakServerChannelConfig;
    setIpDontFragment(arg0: boolean): void;
    setMaxChannels(arg0: number): RakServerChannelConfig;
    setMaxConnections(arg0: number): RakServerChannelConfig;
    setMaxMtu(arg0: number): RakServerChannelConfig;
    setMetrics(arg0: RakServerMetrics): void;
    setMinMtu(arg0: number): RakServerChannelConfig;
    setOption<T extends unknown>(arg0: ChannelOption<T>, arg1: T): boolean;
    setPacketLimit(arg0: number): void;
    setSendCookie(arg0: boolean): void;
    setSupportedProtocols(arg0: number[]): RakServerChannelConfig;
    setUnconnectedMagic(arg0: ByteBuf): RakServerChannelConfig;
}