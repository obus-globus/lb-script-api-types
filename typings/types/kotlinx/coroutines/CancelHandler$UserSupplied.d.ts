import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { CancelHandler } from '../../kotlinx/coroutines/CancelHandler.d.ts'
export class CancelHandler$UserSupplied extends Object implements CancelHandler {
    constructor(handler: (param0: Throwable | null) => void)
    // private handler: (param0: Throwable | null) => void;
    invoke(cause: Throwable | null): void;
    toString(): string;
}