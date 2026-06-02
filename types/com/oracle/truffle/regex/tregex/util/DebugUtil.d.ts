import type { SortedListOfRanges } from '../../../../../../com/oracle/truffle/regex/charset/SortedListOfRanges.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DebugUtil extends Object {
    static appendNodeId(paramsb: StringBuilder, paramid: number): StringBuilder;
    static charToString(paramc: number): string;
    static escapeString(params: string): string;
    static isValidCharForFileName(paramc: number): boolean;
    static javaStringEscape(paramstring: string): string;
    static jsStringEscape(paramstr: string): string;
    static nodeID(paramid: number): string;
    static randomJsStringFromRanges(paramranges: SortedListOfRanges, paramlength: number): string;
    static regexSourceEscape(parampattern: string, paramflags: string): string;
    constructor()
}