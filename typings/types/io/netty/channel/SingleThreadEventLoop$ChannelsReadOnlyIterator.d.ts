import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export class SingleThreadEventLoop$ChannelsReadOnlyIterator<T extends Channel> extends Object implements Iterator<Channel> {
    static empty(): Iterator<Object>;
    constructor(arg0: T[])
    // private channelIterator: Iterator<T>;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): Channel;
    remove(): void;
}