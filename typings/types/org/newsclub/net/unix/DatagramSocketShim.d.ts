import type { DatagramSocket } from '../../../../java/net/DatagramSocket.d.ts'
import type { DatagramSocketImpl } from '../../../../java/net/DatagramSocketImpl.d.ts'
import type { DatagramSocketImplFactory } from '../../../../java/net/DatagramSocketImplFactory.d.ts'
import type { SocketOption } from '../../../../java/net/SocketOption.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFSocketOption } from '../../../../org/newsclub/net/unix/AFSocketOption.d.ts'
export abstract class DatagramSocketShim extends DatagramSocket {
    static setDatagramSocketImplFactory(paramarg0: DatagramSocketImplFactory): void;
    constructor(arg0: DatagramSocketImpl)
    getOption<T extends unknown>(arg0: SocketOption<T>): T;
    getOption<T extends unknown>(arg0: AFSocketOption<T>): T;
    setOption<T extends unknown>(arg0: SocketOption<T>, arg1: T): DatagramSocket;
    setOption<T extends unknown>(arg0: AFSocketOption<T>, arg1: T): DatagramSocket;
}