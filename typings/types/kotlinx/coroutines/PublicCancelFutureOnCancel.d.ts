import type { Future } from '../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { CancelHandler } from '../../kotlinx/coroutines/CancelHandler.d.ts'
export class PublicCancelFutureOnCancel extends Object implements CancelHandler {
    constructor(future: Future<Object>)
    // private future: Future<Object>;
    invoke(cause: Throwable | null): void;
    toString(): string;
}