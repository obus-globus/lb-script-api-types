import type { TransliteratorIDParser$SingleID } from '../../../../com/ibm/icu/text/TransliteratorIDParser$SingleID.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TransliteratorIDParser extends Object {
    static IDtoSTV(paramarg0: string): (Object | null)[];
    static STVtoID(paramarg0: string, paramarg1: string, paramarg2: string): string;
    static parseCompoundID(paramarg0: string, paramarg1: number, paramarg2: StringBuffer, paramarg3: TransliteratorIDParser$SingleID[], paramarg4: (Object | null)[]): boolean;
    static parseFilterID(paramarg0: string, paramarg1: number[]): TransliteratorIDParser$SingleID;
    static parseGlobalFilter(paramarg0: string, paramarg1: number[], paramarg2: number, paramarg3: number[], paramarg4: StringBuffer): string[];
    static parseSingleID(paramarg0: string, paramarg1: number[], paramarg2: number): TransliteratorIDParser$SingleID;
    static registerSpecialInverse(paramarg0: string, paramarg1: string, paramarg2: boolean): void;
    constructor()
}