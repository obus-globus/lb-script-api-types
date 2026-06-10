import type { ExecutorService } from '../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BackgroundInitializer } from '../../../../../org/apache/commons/lang3/concurrent/BackgroundInitializer.d.ts'
import type { BackgroundInitializer$Builder } from '../../../../../org/apache/commons/lang3/concurrent/BackgroundInitializer$Builder.d.ts'
import type { MultiBackgroundInitializer$MultiBackgroundInitializerResults } from '../../../../../org/apache/commons/lang3/concurrent/MultiBackgroundInitializer$MultiBackgroundInitializerResults.d.ts'
import type { FailableSupplier } from '../../../../../org/apache/commons/lang3/function/FailableSupplier.d.ts'
export class MultiBackgroundInitializer extends BackgroundInitializer<MultiBackgroundInitializer$MultiBackgroundInitializerResults> {
    static NUL: () => Object | null;
    static builder(): BackgroundInitializer$Builder<BackgroundInitializer<Object>, Object>;
    constructor()
    constructor(arg0: ExecutorService)
    // private childInitializers: { [key: string]: BackgroundInitializer<Object> };
    addInitializer(arg0: string, arg1: BackgroundInitializer<Object>): void;
    close(): void;
    getTaskCount(): number;
    initialize(): MultiBackgroundInitializer$MultiBackgroundInitializerResults;
    isInitialized(): boolean;
}