import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { ChannelFactory } from '../../../io/netty/channel/ChannelFactory.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Constructor } from '../../../java/lang/reflect/Constructor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ReflectiveChannelFactory<T extends Channel> extends Object implements ChannelFactory<T> {
    constructor(arg0: Class<T>)
    // private constructor: Constructor<T>;
    newChannel(): T;
    toString(): string;
}