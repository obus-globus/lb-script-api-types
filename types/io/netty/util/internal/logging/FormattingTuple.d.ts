import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class FormattingTuple extends Object {
    constructor(arg0: string, arg1: Throwable)
    readonly message: string;
    readonly throwable: Throwable;
    getMessage(): string;
    getThrowable(): Throwable;
}