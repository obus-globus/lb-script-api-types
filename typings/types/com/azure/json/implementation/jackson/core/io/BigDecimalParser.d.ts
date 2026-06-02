import type { BigDecimal } from '../../../../../../../java/math/BigDecimal.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class BigDecimalParser extends Object {
    static parse(paramarg0: string[]): BigDecimal;
    static parse(paramarg0: string[], paramarg1: number, paramarg2: number): BigDecimal;
    static parse(paramarg0: string): BigDecimal;
    constructor(arg0: string[])
    // private chars: string[];
    // private adjustScale(arg0: number, arg1: number): number;
    // private parseBigDecimal(arg0: number): BigDecimal;
    // private toBigDecimalRec(arg0: number, arg1: number, arg2: number, arg3: number): BigDecimal;
}