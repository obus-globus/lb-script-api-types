import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Normalizer2Impl } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Normalizer2Impl.d.ts'
import type { UVector32 } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/UVector32.d.ts'
export class CollationData extends Object {
    constructor(nfc: Normalizer2Impl)
    base: CollationData;
    // private ce32s: number[];
    // private ces: number[];
    compressibleBytes: (Object | null)[];
    // private contexts: string;
    fastLatinTable: string[];
    // private fastLatinTableHeader: string[];
    // private jamoCE32s: number[];
    nfcImpl: Normalizer2Impl;
    // private numScripts: number;
    // private numericPrimary: number;
    rootElements: number[];
    // private scriptStarts: string[];
    // private scriptsIndex: string[];
    // private trie: (Object | null)[];
    // private unsafeBackwardSet: string[];
    // private addHighScriptRange(table: number[], index: number, highLimit: number): number;
    // private addLowScriptRange(table: number[], index: number, lowStart: number): number;
    getCE32(c: number): number;
    getCE32FromContexts(index: number): number;
    getCE32FromSupplementary(c: number): number;
    getCEFromOffsetCE32(c: number, ce32: number): number;
    getEquivalentScripts(script: number): number[];
    getFCD16(c: number): number;
    getFinalCE32(ce32: number): number;
    getFirstPrimaryForGroup(script: number): number;
    getGroupForPrimary(p: number): number;
    getIndirectCE32(ce32: number): number;
    getLastPrimaryForGroup(script: number): number;
    // private getScriptIndex(script: number): number;
    getSingleCE(c: number): number;
    isCompressibleLeadByte(b: number): boolean;
    isCompressiblePrimary(p: number): boolean;
    isDigit(c: number): boolean;
    isUnsafeBackward(c: number, numeric: boolean): boolean;
    // private makeReorderRanges(reorder: number[], latinMustMove: boolean, ranges: UVector32): void;
    makeReorderRanges(reorder: number[], ranges: UVector32): void;
}