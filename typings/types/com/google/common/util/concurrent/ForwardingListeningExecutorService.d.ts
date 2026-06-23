import type { ForwardingExecutorService } from '../../../../../com/google/common/util/concurrent/ForwardingExecutorService.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { ListeningExecutorService } from '../../../../../com/google/common/util/concurrent/ListeningExecutorService.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ForwardingListeningExecutorService extends ForwardingExecutorService implements ListeningExecutorService {
    constructor()
    awaitTermination(timeout: Duration): boolean;
    delegate(): ListeningExecutorService;
    invokeAll<T extends unknown>(tasks: () => T[], timeout: Duration): Future<T>[];
    invokeAny<T extends unknown>(tasks: () => T[], timeout: Duration): T;
    submit(task: () => void): ListenableFuture<Object>;
    submit<T extends unknown>(task: () => void, result: T): ListenableFuture<T>;
    submit<T extends unknown>(task: () => T): ListenableFuture<T>;
}