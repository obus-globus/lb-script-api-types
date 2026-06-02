import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { CancelHandler } from '../../kotlinx/coroutines/CancelHandler.d.ts'
import type { DisposableHandle } from '../../kotlinx/coroutines/DisposableHandle.d.ts'
export class DisposeOnCancel extends Object implements CancelHandler {
    constructor(handle: DisposableHandle)
    // private handle: DisposableHandle;
    invoke(cause: Throwable | null): void;
    toString(): string;
}