import type { ChannelFactory } from '../../../../../io/netty/channel/ChannelFactory.d.ts'
import type { IoHandlerFactory } from '../../../../../io/netty/channel/IoHandlerFactory.d.ts'
import type { ServerChannel } from '../../../../../io/netty/channel/ServerChannel.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class TransportType extends Enum<TransportType> {
    static EPOLL: TransportType;
    static KQUEUE: TransportType;
    static NIO: TransportType;
    static getEntries(): TransportType[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TransportType;
    static values(): (Object | null)[];
    private constructor(serverChannelFactory: ChannelFactory<ServerChannel>)
    readonly ioHandlerFactory: IoHandlerFactory;
    /*not mapped: */ isAvailable(): boolean;
    readonly serverChannelFactory: ChannelFactory<ServerChannel>;
    name(): "NIO" | "EPOLL" | "KQUEUE";
}