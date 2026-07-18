import type { IllegalArgumentException } from '../../../../java/lang/IllegalArgumentException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class ParseException extends IllegalArgumentException {
    constructor(message: string, cause: Throwable | null)
    readonly cause: Throwable | null;
    readonly message: string;
}