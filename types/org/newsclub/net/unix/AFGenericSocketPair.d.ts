import type { AFGenericDatagramChannel } from '../../../../org/newsclub/net/unix/AFGenericDatagramChannel.d.ts'
import type { AFGenericSocketChannel } from '../../../../org/newsclub/net/unix/AFGenericSocketChannel.d.ts'
import type { AFSocketPair } from '../../../../org/newsclub/net/unix/AFSocketPair.d.ts'
import type { AFSomeSocket } from '../../../../org/newsclub/net/unix/AFSomeSocket.d.ts'
export class AFGenericSocketPair<T extends AFSomeSocket> extends AFSocketPair<T> {
    static open(): AFGenericSocketPair<AFGenericSocketChannel>;
    static openDatagram(): AFGenericSocketPair<AFGenericDatagramChannel>;
    constructor(arg0: T, arg1: T)
}