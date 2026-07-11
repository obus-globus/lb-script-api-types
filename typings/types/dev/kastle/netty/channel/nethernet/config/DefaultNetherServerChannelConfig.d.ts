import type { DefaultNetherChannelConfig } from '../../../../../../dev/kastle/netty/channel/nethernet/config/DefaultNetherChannelConfig.d.ts'
import type { Channel } from '../../../../../../io/netty/channel/Channel.d.ts'
import type { ChannelOption } from '../../../../../../io/netty/channel/ChannelOption.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DefaultNetherServerChannelConfig extends DefaultNetherChannelConfig {
    constructor(arg0: Channel)
    // private serverRtcHandshakeTimeoutSeconds: number;
    getOption<T extends unknown>(arg0: ChannelOption<T>): T;
    getOptions(): Map<ChannelOption<Object>, Object>;
    getOptions(arg0: Map<ChannelOption<Object>, Object>, ...arg1: ChannelOption<Object>[]): Map<ChannelOption<Object>, Object>;
    setOption<T extends unknown>(arg0: ChannelOption<T>, arg1: T): boolean;
    setServerRtcHandshakeTimeoutSeconds(arg0: number): void;
}