import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CompletableFuture$Timeout<U extends Object | number | string | boolean> extends Object implements Runnable {
    constructor(arg0: CompletableFuture<U>, arg1: U, arg2: boolean)
    // private exceptional: boolean;
    // private f: CompletableFuture<U>;
    // private value: U;
    run(): void;
}