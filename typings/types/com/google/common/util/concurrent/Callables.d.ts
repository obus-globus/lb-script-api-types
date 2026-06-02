import type { AsyncCallable } from '../../../../../com/google/common/util/concurrent/AsyncCallable.d.ts'
import type { ListeningExecutorService } from '../../../../../com/google/common/util/concurrent/ListeningExecutorService.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Callables extends Object {
    static asAsyncCallable(paramcallable: () => Object | null, paramlisteningExecutorService: ListeningExecutorService): () => Object | null;
    static returning(paramvalue: Object | null): () => Object | null;
    private constructor()
}