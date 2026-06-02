import type { IOException } from '../../../../java/io/IOException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class Errors$NativeIoException extends IOException {
    constructor(arg0: string, arg1: number)
    constructor(arg0: string, arg1: number, arg2: boolean)
    // private expectedErr: number;
    // private fillInStackTrace: boolean;
    expectedErr(): number;
    fillInStackTrace(): Throwable;
}