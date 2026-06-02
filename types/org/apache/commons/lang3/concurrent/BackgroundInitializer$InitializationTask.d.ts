import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { ExecutorService } from '../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BackgroundInitializer$InitializationTask extends Object implements Callable<T> {
    constructor(null_: BackgroundInitializer$InitializationTask, arg1: ExecutorService)
    // private execFinally: ExecutorService;
    call<T extends Object | number | string | boolean>(): T;
}