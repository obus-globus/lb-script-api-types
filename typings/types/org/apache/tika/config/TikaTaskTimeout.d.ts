import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
export class TikaTaskTimeout extends Object {
    static getTimeoutMillis(paramarg0: ParseContext, paramarg1: number): number;
    constructor(arg0: number)
    readonly timeoutMillis: number;
    getTimeoutMillis(): number;
}