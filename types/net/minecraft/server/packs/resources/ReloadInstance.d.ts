import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ReloadInstance extends Object{
    checkExceptions(): void;
    done(): CompletableFuture<Object>;
    getActualProgress(): number;
    isDone(): boolean;
}