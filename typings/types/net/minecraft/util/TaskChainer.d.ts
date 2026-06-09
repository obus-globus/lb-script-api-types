import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TaskChainer extends Object {
    append(task: () => void): void;
    append(preparation: CompletableFuture<T>, chainedTask: (param0: T) => void): void;
}