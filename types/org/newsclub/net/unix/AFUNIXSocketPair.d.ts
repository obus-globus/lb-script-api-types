import type { AFSocketPair } from '../../../../org/newsclub/net/unix/AFSocketPair.d.ts'
import type { AFSocketType } from '../../../../org/newsclub/net/unix/AFSocketType.d.ts'
import type { AFSomeSocket } from '../../../../org/newsclub/net/unix/AFSomeSocket.d.ts'
import type { AFUNIXDatagramChannel } from '../../../../org/newsclub/net/unix/AFUNIXDatagramChannel.d.ts'
import type { AFUNIXSocketChannel } from '../../../../org/newsclub/net/unix/AFUNIXSocketChannel.d.ts'
export class AFUNIXSocketPair<T extends AFSomeSocket> extends AFSocketPair<T> {
    static open(): AFUNIXSocketPair<AFUNIXSocketChannel>;
    static openDatagram(): AFUNIXSocketPair<AFUNIXDatagramChannel>;
    static openDatagram(paramarg0: AFSocketType): AFUNIXSocketPair<AFUNIXDatagramChannel>;
    constructor(arg0: T, arg1: T)
}