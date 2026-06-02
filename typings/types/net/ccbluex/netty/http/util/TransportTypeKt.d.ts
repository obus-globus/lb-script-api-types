import type { ServerBootstrap } from '../../../../../io/netty/bootstrap/ServerBootstrap.d.ts'
import type { ThreadFactory } from '../../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../kotlin/Pair.d.ts'
export class TransportTypeKt extends Object {
    static setup(paramarg0: ServerBootstrap): Pair<(Object | null)[], (Object | null)[]>;
    static setup(paramarg0: ServerBootstrap, paramarg1: boolean): Pair<(Object | null)[], (Object | null)[]>;
    static setup(paramarg0: ServerBootstrap, paramarg1: boolean, paramarg2: ThreadFactory): Pair<(Object | null)[], (Object | null)[]>;
}