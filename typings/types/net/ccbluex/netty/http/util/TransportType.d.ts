import type { ChannelFactory } from '../../../../../io/netty/channel/ChannelFactory.d.ts'
import type { IoHandlerFactory } from '../../../../../io/netty/channel/IoHandlerFactory.d.ts'
import type { ServerChannel } from '../../../../../io/netty/channel/ServerChannel.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class TransportType extends Enum<TransportType> {
    static EPOLL: TransportType;
    static KQUEUE: TransportType;
    static NIO: TransportType;
    static getEntries(): TransportType[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): TransportType;
    static values(): TransportType[];
    private constructor(serverChannelFactory: ChannelFactory<ServerChannel>)
    readonly ioHandlerFactory: IoHandlerFactory;
    /*not mapped: */ isAvailable(): boolean;
    readonly serverChannelFactory: ChannelFactory<ServerChannel>;
    name(): "NIO" | "EPOLL" | "KQUEUE";
}