import type { Exception } from '../../../../../../../java/lang/Exception.d.ts'
import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
export class InvalidDataException extends Exception {
    constructor(arg0: number)
    constructor(arg0: number, arg1: string)
    constructor(arg0: number, arg1: string, arg2: Throwable)
    constructor(arg0: number, arg1: Throwable)
    // private closecode: number;
    getCloseCode(): number;
}