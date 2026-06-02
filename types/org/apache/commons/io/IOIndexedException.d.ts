import type { IOException } from '../../../../java/io/IOException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class IOIndexedException extends IOException {
    constructor(arg0: number, arg1: Throwable)
    readonly index: number;
    getIndex(): number;
}