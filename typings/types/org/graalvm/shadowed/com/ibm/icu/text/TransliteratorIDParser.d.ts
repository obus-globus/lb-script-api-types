import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TransliteratorIDParser$SingleID } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TransliteratorIDParser$SingleID.d.ts'
export class TransliteratorIDParser extends Object {
    static IDtoSTV(paramid: string): string[];
    static STVtoID(paramsource: string, paramtarget: string, paramvariant: string): string;
    static parseCompoundID(paramid: string, paramdir: number, paramcanonID: StringBuilder, paramlist: TransliteratorIDParser$SingleID[], paramglobalFilter: string[][]): boolean;
    static parseFilterID(paramid: string, parampos: number[]): TransliteratorIDParser$SingleID;
    static parseGlobalFilter(paramid: string, parampos: number[], paramdir: number, paramwithParens: number[], paramcanonID: StringBuilder): string[];
    static parseSingleID(paramid: string, parampos: number[], paramdir: number): TransliteratorIDParser$SingleID;
    static registerSpecialInverse(paramtarget: string, paraminverseTarget: string, parambidirectional: boolean): void;
    constructor()
}