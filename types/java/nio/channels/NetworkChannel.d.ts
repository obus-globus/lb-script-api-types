import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { SocketOption } from '../../../java/net/SocketOption.d.ts'
import type { Channel } from '../../../java/nio/channels/Channel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface NetworkChannel extends Channel, Object{
    bind(arg0: SocketAddress): NetworkChannel;
    getLocalAddress(): SocketAddress;
    getOption<T extends Object | number | string | boolean>(arg0: SocketOption<T>): T;
    setOption<T extends Object | number | string | boolean>(arg0: SocketOption<T>, arg1: T): NetworkChannel;
    supportedOptions(): SocketOption<Object>[];
}