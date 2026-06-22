import type { Runnable } from '../../../../../../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../../../../../../java/util/concurrent/Callable.d.ts'
import type { ExecutorService } from '../../../../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { TimeUnit } from '../../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ListenableFuture } from '../../../../../../../../org/spongepowered/include/com/google/common/util/concurrent/ListenableFuture.d.ts'
export interface ListeningExecutorService extends ExecutorService, Object {
    awaitTermination(arg0: number, arg1: TimeUnit): boolean;
    close(): void;
    execute(arg0: () => void): void;
    isShutdown(): boolean;
    isTerminated(): boolean;
    shutdown(): void;
    submit(arg0: () => void): ListenableFuture<Object>;
    submit<T extends Object | number | string | boolean>(arg0: () => void, arg1: T): ListenableFuture<T>;
    submit<T extends Object | number | string | boolean>(arg0: () => T): ListenableFuture<T>;
}