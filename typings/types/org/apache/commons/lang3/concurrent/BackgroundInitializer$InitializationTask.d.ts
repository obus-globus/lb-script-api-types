import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { ExecutorService } from '../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BackgroundInitializer } from '../../../../../org/apache/commons/lang3/concurrent/BackgroundInitializer.d.ts'
export class BackgroundInitializer$InitializationTask extends Object implements Callable<T> {
    constructor(null_: BackgroundInitializer<Object>, arg1: ExecutorService)
    // private execFinally: ExecutorService;
    call<T extends unknown>(): T;
}