import type { SortedListOfRanges } from '../../../../../com/oracle/truffle/regex/charset/SortedListOfRanges.d.ts'
import type { Encodings$Encoding } from '../../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CodePointSet {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static create(parambuf: (Object | null)[]): (Object | null)[];
    static create(paramsingle: number): (Object | null)[];
    static create(...paramranges: number[]): (Object | null)[];
    static createInverse(paramsrc: SortedListOfRanges, paramencoding: Encodings$Encoding): (Object | null)[];
    static createNoDedup(paramranges: SortedListOfRanges): (Object | null)[];
    static createNoDedup(...paramranges: number[]): (Object | null)[];
    static getEmpty(): (Object | null)[];
}