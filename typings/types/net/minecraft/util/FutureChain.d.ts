import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { TaskChainer } from '../../../net/minecraft/util/TaskChainer.d.ts'
import type { Logger } from '../../../org/slf4j/Logger.d.ts'
export class FutureChain extends Object implements AutoCloseable, TaskChainer {
    static LOGGER: Logger;
    static immediate(paramexecutor: Executor): (param0: CompletableFuture<Object>, param1: (param0: Object | null) => void) => void;
    constructor(executor: Executor)
    // private closed: boolean;
    // private executor: Executor;
    // private head: CompletableFuture<Object>;
    append(task: () => void): void;
    append(preparation: CompletableFuture<T>, chainedTask: (param0: T) => void): void;
    close(): void;
}