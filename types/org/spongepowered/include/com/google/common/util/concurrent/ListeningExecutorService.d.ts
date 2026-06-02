import type { Runnable } from '../../../../../../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../../../../../../java/util/concurrent/Callable.d.ts'
import type { ExecutorService } from '../../../../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ListenableFuture } from '../../../../../../../../org/spongepowered/include/com/google/common/util/concurrent/ListenableFuture.d.ts'
export interface ListeningExecutorService extends ExecutorService, Object{
    close(): void;
    submit(arg0: () => void): ListenableFuture<Object>;
    submit<T extends Object | number | string | boolean>(arg0: () => void, arg1: T): ListenableFuture<T>;
    submit(arg0: () => T): ListenableFuture<T>;
}