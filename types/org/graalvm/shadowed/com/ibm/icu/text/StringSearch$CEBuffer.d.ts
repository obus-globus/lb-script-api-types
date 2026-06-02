import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { StringSearch } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/StringSearch.d.ts'
import type { StringSearch$CEI } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/StringSearch$CEI.d.ts'
export class StringSearch$CEBuffer extends Object {
    constructor(ss: StringSearch)
    // private bufSize_: number;
    // private buf_: StringSearch$CEI[];
    // private firstIx_: number;
    // private limitIx_: number;
    // private strSearch_: StringSearch;
    get(index: number): StringSearch$CEI;
    getPrevious(index: number): StringSearch$CEI;
}