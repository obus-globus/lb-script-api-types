import type { Range } from '../../../../../../com/oracle/truffle/regex/charset/Range.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PythonLocaleData extends Object {
    static getLocaleData(paramlocale: string): PythonLocaleData;
    private constructor(turkish: boolean, charset: Charset)
    // private caseFolding: number[];
    // private nonWordChars: (Object | null)[];
    // private wordChars: (Object | null)[];
    caseFoldUnfold(charClass: Range[], copy: Range[]): void;
    // private caseFoldingBinarySearch(minIndex: number, target: number): number;
    // private caseFoldingFrom(index: number): number;
    // private caseFoldingSize(): number;
    // private caseFoldingTo(index: number): number;
    getNonWordCharacters(): (Object | null)[];
    getWordCharacters(): (Object | null)[];
}