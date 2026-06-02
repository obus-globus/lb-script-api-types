import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../../../../java/lang/Thread.d.ts'
import type { Thread$UncaughtExceptionHandler } from '../../../../../../../java/lang/Thread$UncaughtExceptionHandler.d.ts'
import type { Callable } from '../../../../../../../java/util/concurrent/Callable.d.ts'
import type { ExecutorService } from '../../../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
export class ComThread extends Object {
    constructor(arg0: string, arg1: number, arg2: (param0: Thread, param1: Throwable) => void)
    constructor(arg0: string, arg1: number, arg2: (param0: Thread, param1: Throwable) => void, arg3: number)
    // private executor: ExecutorService;
    // private firstTask: () => void;
    // private requiresInitialisation: boolean;
    // private timeoutMilliseconds: number;
    // private uncaughtExceptionHandler: (param0: Thread, param1: Throwable) => void;
    execute<T extends Object | number | string | boolean>(arg0: () => T): T;
    finalize(): void;
    terminate(arg0: number): void;
}