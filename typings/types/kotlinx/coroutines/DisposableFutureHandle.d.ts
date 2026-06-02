import type { Future } from '../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { DisposableHandle } from '../../kotlinx/coroutines/DisposableHandle.d.ts'
export class DisposableFutureHandle extends Object implements DisposableHandle {
    constructor(future: Future<Object>)
    // private future: Future<Object>;
    dispose(): void;
    toString(): string;
}