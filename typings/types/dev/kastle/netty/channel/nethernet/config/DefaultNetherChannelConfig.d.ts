import type { PortAllocatorConfig } from '../../../../../../dev/kastle/webrtc/PortAllocatorConfig.d.ts'
import type { Channel } from '../../../../../../io/netty/channel/Channel.d.ts'
import type { ChannelOption } from '../../../../../../io/netty/channel/ChannelOption.d.ts'
import type { DefaultChannelConfig } from '../../../../../../io/netty/channel/DefaultChannelConfig.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DefaultNetherChannelConfig extends DefaultChannelConfig {
    constructor(arg0: Channel)
    readonly options: Map<ChannelOption<Object>, Object>;
    // private portAllocatorConfig: PortAllocatorConfig;
    getOption<T extends unknown>(arg0: ChannelOption<T>): T;
    getOptions(): Map<ChannelOption<Object>, Object>;
    getOptions(arg0: Map<ChannelOption<Object>, Object>, ...arg1: ChannelOption<Object>[]): Map<ChannelOption<Object>, Object>;
    setOption<T extends unknown>(arg0: ChannelOption<T>, arg1: T): boolean;
    setPortAllocatorConfig(arg0: PortAllocatorConfig): void;
}