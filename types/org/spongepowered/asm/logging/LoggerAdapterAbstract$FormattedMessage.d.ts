import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class LoggerAdapterAbstract$FormattedMessage extends Object {
    constructor(arg0: string, arg1: Object[])
    readonly message: string;
    // private t: Throwable;
    getMessage(): string;
    getThrowable(): Throwable;
    hasThrowable(): boolean;
    toString(): string;
}