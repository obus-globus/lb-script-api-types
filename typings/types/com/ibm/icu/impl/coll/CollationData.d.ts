import type { Normalizer2Impl } from '../../../../../com/ibm/icu/impl/Normalizer2Impl.d.ts'
import type { UVector32 } from '../../../../../com/ibm/icu/impl/coll/UVector32.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CollationData extends Object {
    constructor(arg0: Normalizer2Impl)
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
    // private addHighScriptRange(arg0: number[], arg1: number, arg2: number): number;
    // private addLowScriptRange(arg0: number[], arg1: number, arg2: number): number;
    getCE32(arg0: number): number;
    getCE32FromContexts(arg0: number): number;
    getCE32FromSupplementary(arg0: number): number;
    getCEFromOffsetCE32(arg0: number, arg1: number): number;
    getEquivalentScripts(arg0: number): number[];
    getFCD16(arg0: number): number;
    getFinalCE32(arg0: number): number;
    getFirstPrimaryForGroup(arg0: number): number;
    getGroupForPrimary(arg0: number): number;
    getIndirectCE32(arg0: number): number;
    getLastPrimaryForGroup(arg0: number): number;
    // private getScriptIndex(arg0: number): number;
    getSingleCE(arg0: number): number;
    isCompressibleLeadByte(arg0: number): boolean;
    isCompressiblePrimary(arg0: number): boolean;
    isDigit(arg0: number): boolean;
    isUnsafeBackward(arg0: number, arg1: boolean): boolean;
    makeReorderRanges(arg0: number[], arg1: UVector32): void;
    // private makeReorderRanges(arg0: number[], arg1: boolean, arg2: UVector32): void;
}