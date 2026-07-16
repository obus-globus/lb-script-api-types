import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JdkFutureAdapters extends Object {
    static listenInPoolThread<V extends unknown>(paramfuture: Future<V>): ListenableFuture<V>;
    static listenInPoolThread<V extends unknown>(paramfuture: Future<V>, paramexecutor: Executor): ListenableFuture<V>;
    private constructor()
}