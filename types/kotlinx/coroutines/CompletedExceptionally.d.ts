import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class CompletedExceptionally extends Object {
    constructor(cause: Throwable, handled: boolean)
    makeHandled(): boolean;
    toString(): string;
}