import type { ChannelOption } from '../../../../../io/netty/channel/ChannelOption.d.ts'
import type { DatagramChannelConfig } from '../../../../../io/netty/channel/socket/DatagramChannelConfig.d.ts'
import type { DefaultDatagramChannelConfig } from '../../../../../io/netty/channel/socket/DefaultDatagramChannelConfig.d.ts'
import type { NioDatagramChannel } from '../../../../../io/netty/channel/socket/nio/NioDatagramChannel.d.ts'
import type { InetAddress } from '../../../../../java/net/InetAddress.d.ts'
import type { NetworkInterface } from '../../../../../java/net/NetworkInterface.d.ts'
import type { SocketOption } from '../../../../../java/net/SocketOption.d.ts'
import type { DatagramChannel } from '../../../../../java/nio/channels/DatagramChannel.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NioDatagramChannelConfig extends DefaultDatagramChannelConfig {
    constructor(arg0: NioDatagramChannel, arg1: DatagramChannel)
    // private javaChannel: DatagramChannel;
    autoReadCleared(): void;
    getInterface(): InetAddress;
    getNetworkInterface(): NetworkInterface;
    getOption<T extends unknown>(arg0: ChannelOption<T>): T;
    // private getOption0<T extends unknown>(arg0: SocketOption<T>): T;
    getOptions(): Map<ChannelOption<Object>, Object>;
    getOptions(arg0: Map<ChannelOption<Object>, Object>, arg1: ChannelOption<Object>[]): Map<ChannelOption<Object>, Object>;
    getTimeToLive(): number;
    isLoopbackModeDisabled(): boolean;
    setAutoRead(arg0: boolean): DatagramChannelConfig;
    setInterface(arg0: InetAddress): DatagramChannelConfig;
    setLoopbackModeDisabled(arg0: boolean): DatagramChannelConfig;
    setNetworkInterface(arg0: NetworkInterface): DatagramChannelConfig;
    setOption<T extends unknown>(arg0: ChannelOption<T>, arg1: T): boolean;
    // private setOption0<T extends unknown>(arg0: SocketOption<T>, arg1: T): void;
    setTimeToLive(arg0: number): DatagramChannelConfig;
}