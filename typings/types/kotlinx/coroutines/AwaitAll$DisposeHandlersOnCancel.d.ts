import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { AwaitAll } from '../../kotlinx/coroutines/AwaitAll.d.ts'
import type { AwaitAll$AwaitAllNode } from '../../kotlinx/coroutines/AwaitAll$AwaitAllNode.d.ts'
import type { CancelHandler } from '../../kotlinx/coroutines/CancelHandler.d.ts'
export class AwaitAll$DisposeHandlersOnCancel extends Object implements CancelHandler {
    constructor(null_: AwaitAll<Object>, nodes: AwaitAll$AwaitAllNode[])
    // private nodes: AwaitAll$AwaitAllNode[];
    disposeAll(): void;
    invoke(cause: Throwable | null): void;
    toString(): string;
}