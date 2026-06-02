import type { BigDecimal } from '../../../../../../../java/math/BigDecimal.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class NumberInput extends Object {
    static NASTY_SMALL_DOUBLE: string;
    static inLongRange(paramarg0: string[], paramarg1: number, paramarg2: number, paramarg3: boolean): boolean;
    static parseAsDouble(paramarg0: string, paramarg1: number): number;
    static parseAsInt(paramarg0: string, paramarg1: number): number;
    static parseAsLong(paramarg0: string, paramarg1: number): number;
    static parseBigDecimal(paramarg0: string[]): BigDecimal;
    static parseBigDecimal(paramarg0: string[], paramarg1: number, paramarg2: number): BigDecimal;
    static parseBigDecimal(paramarg0: string): BigDecimal;
    static parseDouble(paramarg0: string): number;
    static parseInt(paramarg0: string[], paramarg1: number, paramarg2: number): number;
    static parseInt(paramarg0: string): number;
    static parseLong(paramarg0: string[], paramarg1: number, paramarg2: number): number;
    static parseLong(paramarg0: string): number;
    constructor()
}