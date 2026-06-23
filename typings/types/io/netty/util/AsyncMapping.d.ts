import type { Future } from '../../../io/netty/util/concurrent/Future.d.ts'
import type { Promise } from '../../../io/netty/util/concurrent/Promise.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface AsyncMapping<IN extends unknown, OUT extends unknown> extends Object{
    map(arg0: IN, arg1: Promise<OUT>): Future<OUT>;
}