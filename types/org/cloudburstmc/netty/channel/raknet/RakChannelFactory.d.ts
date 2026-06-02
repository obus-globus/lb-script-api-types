import type { Channel } from '../../../../../io/netty/channel/Channel.d.ts'
import type { ChannelFactory } from '../../../../../io/netty/channel/ChannelFactory.d.ts'
import type { DatagramChannel } from '../../../../../io/netty/channel/socket/DatagramChannel.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RakChannel } from '../../../../../org/cloudburstmc/netty/channel/raknet/RakChannel.d.ts'
import type { RakClientChannel } from '../../../../../org/cloudburstmc/netty/channel/raknet/RakClientChannel.d.ts'
import type { RakServerChannel } from '../../../../../org/cloudburstmc/netty/channel/raknet/RakServerChannel.d.ts'
export class RakChannelFactory<T extends Channel> extends Object implements ChannelFactory<T> {
    static client(paramarg0: ChannelFactory<Object>): RakChannelFactory<RakClientChannel>;
    static client(paramarg0: ChannelFactory<Object>, paramarg1: (param0: DatagramChannel) => void): RakChannelFactory<RakClientChannel>;
    static client(paramarg0: Class<Object>): RakChannelFactory<RakClientChannel>;
    static client(paramarg0: Class<Object>, paramarg1: (param0: DatagramChannel) => void): RakChannelFactory<RakClientChannel>;
    static server(paramarg0: ChannelFactory<Object>): RakChannelFactory<RakServerChannel>;
    static server(paramarg0: ChannelFactory<Object>, paramarg1: (param0: DatagramChannel) => void): RakChannelFactory<RakServerChannel>;
    static server(paramarg0: ChannelFactory<Object>, paramarg1: (param0: DatagramChannel) => void, paramarg2: (param0: RakChannel) => void): RakChannelFactory<RakServerChannel>;
    static server(paramarg0: Class<Object>): RakChannelFactory<RakServerChannel>;
    static server(paramarg0: Class<Object>, paramarg1: (param0: DatagramChannel) => void): RakChannelFactory<RakServerChannel>;
    static server(paramarg0: Class<Object>, paramarg1: (param0: DatagramChannel) => void, paramarg2: (param0: RakChannel) => void): RakChannelFactory<RakServerChannel>;
    private constructor(arg0: Class<T>, arg1: (param0: DatagramChannel) => T, arg2: ChannelFactory<DatagramChannel>, arg3: (param0: DatagramChannel) => void)
    // private channelClass: Class<T>;
    // private constructor: (param0: DatagramChannel) => T;
    // private datagramChannelFactory: ChannelFactory<DatagramChannel>;
    // private parentConsumer: (param0: DatagramChannel) => void;
    newChannel(): T;
    toString(): string;
}