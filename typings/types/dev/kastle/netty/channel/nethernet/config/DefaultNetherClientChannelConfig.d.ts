import type { DefaultNetherChannelConfig } from '../../../../../../dev/kastle/netty/channel/nethernet/config/DefaultNetherChannelConfig.d.ts'
import type { Channel } from '../../../../../../io/netty/channel/Channel.d.ts'
import type { ChannelOption } from '../../../../../../io/netty/channel/ChannelOption.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DefaultNetherClientChannelConfig extends DefaultNetherChannelConfig {
    constructor(arg0: Channel)
    // private clientHandshakeTimeoutMs: number;
    // private maxHandshakeAttempts: number;
    getOption<T extends unknown>(arg0: ChannelOption<T>): T;
    getOptions(): Map<ChannelOption<Object>, Object>;
    getOptions(arg0: Map<ChannelOption<Object>, Object>, ...arg1: ChannelOption<Object>[]): Map<ChannelOption<Object>, Object>;
    setClientHandshakeTimeoutMs(arg0: number): void;
    setMaxHandshakeAttempts(arg0: number): void;
    setOption<T extends unknown>(arg0: ChannelOption<T>, arg1: T): boolean;
}