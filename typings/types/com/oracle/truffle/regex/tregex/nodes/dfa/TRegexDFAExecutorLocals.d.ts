import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TRegexExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorLocals.d.ts'
import type { DFACaptureGroupTrackingData } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupTrackingData.d.ts'
export class TRegexDFAExecutorLocals extends TRegexExecutorLocals {
    constructor(input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number, index: number, cgData: DFACaptureGroupTrackingData, fixedData: number[], intArrays: number[][])
    // private cgData: DFACaptureGroupTrackingData;
    readonly curMinIndex: number;
    readonly fixedData: number[];
    readonly intArrays: number[][];
    readonly lastIndex: number;
    readonly lastTransition: number;
    readonly matchStart: number;
    // private result: number;
    getCGData(): DFACaptureGroupTrackingData;
    getCurMinIndex(): number;
    getFixedData(): number[];
    getIntArrays(): number[][];
    getLastIndex(): number;
    getLastTransition(): number;
    getMatchStart(): number;
    getResultInt(): number;
    setCurMinIndex(curMinIndex: number): void;
    setLastIndex(): void;
    setLastTransition(lastTransition: number): void;
    setMatchStart(matchStart: number): void;
    setResultInt(result: number): void;
    toInnerLiteralBackwardLocals(): TRegexDFAExecutorLocals;
}