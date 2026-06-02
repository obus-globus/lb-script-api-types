import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class ExceptionUtils extends Object {
    static getFilteredStackTrace(paramarg0: Throwable): string;
    static getStackTrace(paramarg0: Throwable): string;
    static trimMessage(paramarg0: string): string;
    constructor()
}