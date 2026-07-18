import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Channel } from '../../../../../io/netty/channel/Channel.d.ts'
import type { ChannelConfig } from '../../../../../io/netty/channel/ChannelConfig.d.ts'
import type { ChannelOption } from '../../../../../io/netty/channel/ChannelOption.d.ts'
import type { DefaultChannelConfig } from '../../../../../io/netty/channel/DefaultChannelConfig.d.ts'
import type { MessageSizeEstimator } from '../../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractHttp2StreamChannel$Http2StreamChannelConfig extends DefaultChannelConfig {
    constructor(arg0: Channel)
    // private autoStreamFlowControl: boolean;
    getMessageSizeEstimator(): MessageSizeEstimator;
    getOption<T extends unknown>(arg0: ChannelOption<T>): T;
    getOptions(): JavaMap<ChannelOption<Object>, Object>;
    getOptions(arg0: JavaMap<ChannelOption<Object>, Object>, ...arg1: ChannelOption<Object>[]): JavaMap<ChannelOption<Object>, Object>;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): ChannelConfig;
    setOption<T extends unknown>(arg0: ChannelOption<T>, arg1: T): boolean;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): ChannelConfig;
}