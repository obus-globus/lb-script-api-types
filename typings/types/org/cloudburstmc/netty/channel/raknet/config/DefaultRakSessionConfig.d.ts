import type { Channel } from '../../../../../../io/netty/channel/Channel.d.ts'
import type { ChannelOption } from '../../../../../../io/netty/channel/ChannelOption.d.ts'
import type { DefaultChannelConfig } from '../../../../../../io/netty/channel/DefaultChannelConfig.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RakChannelConfig } from '../../../../../../org/cloudburstmc/netty/channel/raknet/config/RakChannelConfig.d.ts'
import type { RakChannelMetrics } from '../../../../../../org/cloudburstmc/netty/channel/raknet/config/RakChannelMetrics.d.ts'
export class DefaultRakSessionConfig extends DefaultChannelConfig implements RakChannelConfig {
    constructor(arg0: Channel)
    readonly autoFlush: boolean;
    readonly flushInterval: number;
    readonly guid: number;
    readonly metrics: RakChannelMetrics;
    readonly mtu: number;
    readonly orderingChannels: number;
    readonly protocolVersion: number;
    readonly sessionTimeout: number;
    getFlushInterval(): number;
    getGuid(): number;
    getMetrics(): RakChannelMetrics;
    getMtu(): number;
    getOption<T extends unknown>(arg0: ChannelOption<T>): T;
    getOptions(): Map<ChannelOption<Object>, Object>;
    getOptions(arg0: Map<ChannelOption<Object>, Object>, arg1: ChannelOption<Object>[]): Map<ChannelOption<Object>, Object>;
    getOrderingChannels(): number;
    getProtocolVersion(): number;
    getSessionTimeout(): number;
    isAutoFlush(): boolean;
    setAutoFlush(arg0: boolean): void;
    setFlushInterval(arg0: number): void;
    setGuid(arg0: number): RakChannelConfig;
    setMetrics(arg0: RakChannelMetrics): RakChannelConfig;
    setMtu(arg0: number): RakChannelConfig;
    setOption<T extends unknown>(arg0: ChannelOption<T>, arg1: T): boolean;
    setOrderingChannels(arg0: number): RakChannelConfig;
    setProtocolVersion(arg0: number): RakChannelConfig;
    setSessionTimeout(arg0: number): RakChannelConfig;
}