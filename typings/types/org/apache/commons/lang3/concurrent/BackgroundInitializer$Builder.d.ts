import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { ExecutorService } from '../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractConcurrentInitializer$AbstractBuilder } from '../../../../../org/apache/commons/lang3/concurrent/AbstractConcurrentInitializer$AbstractBuilder.d.ts'
import type { BackgroundInitializer } from '../../../../../org/apache/commons/lang3/concurrent/BackgroundInitializer.d.ts'
import type { FailableSupplier } from '../../../../../org/apache/commons/lang3/function/FailableSupplier.d.ts'
export class BackgroundInitializer$Builder<I extends BackgroundInitializer<T>, T extends Object | number | string | boolean> extends AbstractConcurrentInitializer$AbstractBuilder<I, T, BackgroundInitializer$Builder<I, T>, Exception> {
    static NUL: () => Object | null;
    constructor()
    // private externalExecutor: ExecutorService;
    get(): I;
    setExternalExecutor(arg0: ExecutorService): BackgroundInitializer$Builder<I, T>;
}