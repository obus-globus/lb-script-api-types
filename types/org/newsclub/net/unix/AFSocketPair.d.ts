import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { AFSomeSocket } from '../../../../org/newsclub/net/unix/AFSomeSocket.d.ts'
import type { CloseablePair } from '../../../../org/newsclub/net/unix/CloseablePair.d.ts'
export abstract class AFSocketPair<T extends AFSomeSocket> extends CloseablePair<T> {
    constructor(arg0: T, arg1: T)
    constructor(arg0: T, arg1: T, arg2: Closeable)
    getSocket1(): T;
    getSocket2(): T;
}