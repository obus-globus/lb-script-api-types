import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export abstract class SslCompletionEvent extends Object {
    constructor()
    constructor(arg0: Throwable)
    // private cause: Throwable;
    cause(): Throwable;
    isSuccess(): boolean;
    toString(): string;
}