import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class FormattingTuple extends Object {
    static NULL: FormattingTuple;
    constructor(arg0: string)
    constructor(arg0: string, arg1: Object[], arg2: Throwable)
    readonly argArray: Object[];
    readonly message: string;
    readonly throwable: Throwable;
    getArgArray(): Object[];
    getMessage(): string;
    getThrowable(): Throwable;
}