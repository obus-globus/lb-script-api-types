import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../java/util/concurrent/Callable.d.ts'
import type { Future } from '../../../java/util/concurrent/Future.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface CompletionService<V extends unknown> extends Object {
    poll(): Future<V>;
    poll(arg0: number, arg1: TimeUnit): Future<V>;
    submit(arg0: () => void, arg1: V): Future<V>;
    submit(arg0: () => V): Future<V>;
    take(): Future<V>;
}