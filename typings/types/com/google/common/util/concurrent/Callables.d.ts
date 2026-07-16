import type { AsyncCallable } from '../../../../../com/google/common/util/concurrent/AsyncCallable.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { ListeningExecutorService } from '../../../../../com/google/common/util/concurrent/ListeningExecutorService.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Callables extends Object {
    static asAsyncCallable<T extends unknown>(paramcallable: () => T, paramlisteningExecutorService: ListeningExecutorService): () => ListenableFuture<T>;
    static returning<T extends unknown>(paramvalue: T): () => T;
    private constructor()
}