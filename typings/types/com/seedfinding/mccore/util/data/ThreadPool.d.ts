import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { ThreadPoolExecutor } from '../../../../../java/util/concurrent/ThreadPoolExecutor.d.ts'
import type { AtomicInteger } from '../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class ThreadPool extends Object {
    constructor(arg0: number)
    // private activeCount: AtomicInteger;
    readonly executor: ThreadPoolExecutor;
    readonly threadCount: number;
    awaitCompletion(): void;
    awaitFreeThread(): void;
    getExecutor(): ThreadPoolExecutor;
    getThreadCount(): number;
    iterate<T extends Object | number | string | boolean>(arg0: T[], arg1: (param0: T) => void): void;
    iterate<T extends Object | number | string | boolean>(arg0: Iterator<T>, arg1: (param0: T) => void): void;
    restart(): void;
    run(arg0: () => void): void;
    shutdown(): void;
}