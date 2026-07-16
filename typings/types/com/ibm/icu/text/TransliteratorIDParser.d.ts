import type { TransliteratorIDParser$SingleID } from '../../../../com/ibm/icu/text/TransliteratorIDParser$SingleID.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TransliteratorIDParser extends Object {
    static IDtoSTV(paramarg0: string): string[];
    static STVtoID(paramarg0: string, paramarg1: string, paramarg2: string): string;
    static parseCompoundID(paramarg0: string, paramarg1: number, paramarg2: StringBuilder, paramarg3: TransliteratorIDParser$SingleID[], paramarg4: string[][]): boolean;
    static parseFilterID(paramarg0: string, paramarg1: number[]): TransliteratorIDParser$SingleID;
    static parseGlobalFilter(paramarg0: string, paramarg1: number[], paramarg2: number, paramarg3: number[], paramarg4: StringBuilder): string[];
    static parseSingleID(paramarg0: string, paramarg1: number[], paramarg2: number): TransliteratorIDParser$SingleID;
    static registerSpecialInverse(paramarg0: string, paramarg1: string, paramarg2: boolean): void;
    constructor()
}