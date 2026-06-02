import type { ChannelConfig } from '../../../../../../io/netty/channel/ChannelConfig.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RakChannelMetrics } from '../../../../../../org/cloudburstmc/netty/channel/raknet/config/RakChannelMetrics.d.ts'
export interface RakChannelConfig extends ChannelConfig, Object{
    getFlushInterval(): number;
    getGuid(): number;
    getMetrics(): RakChannelMetrics;
    getMtu(): number;
    getOrderingChannels(): number;
    getProtocolVersion(): number;
    getSessionTimeout(): number;
    isAutoFlush(): boolean;
    setAutoFlush(arg0: boolean): void;
    setFlushInterval(arg0: number): void;
    setGuid(arg0: number): RakChannelConfig;
    setMetrics(arg0: RakChannelMetrics): RakChannelConfig;
    setMtu(arg0: number): RakChannelConfig;
    setOrderingChannels(arg0: number): RakChannelConfig;
    setProtocolVersion(arg0: number): RakChannelConfig;
    setSessionTimeout(arg0: number): RakChannelConfig;
}