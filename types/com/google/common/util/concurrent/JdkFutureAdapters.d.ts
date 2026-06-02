import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JdkFutureAdapters extends Object {
    static listenInPoolThread(paramfuture: Future<Object>): ListenableFuture<Object>;
    static listenInPoolThread(paramfuture: Future<Object>, paramexecutor: Executor): ListenableFuture<Object>;
    private constructor()
}