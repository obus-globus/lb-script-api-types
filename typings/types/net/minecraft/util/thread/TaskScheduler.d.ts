import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TaskScheduler<R extends Runnable> extends AutoCloseable, Object{
    close(): void;
    name(): string;
    schedule(r: R): void;
    scheduleWithResult(futureConsumer: (param0: CompletableFuture<Source>) => void): CompletableFuture<Source>;
    wrapRunnable(runnable: () => void): R;
}