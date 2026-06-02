import type { TRegexDFAExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorNode.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DFACaptureGroupTrackingData extends Object {
    constructor(currentResultOrder: number[], results: number[], currentResult: number[])
    currentResult: number[];
    currentResultOrder: number[];
    results: number[];
    exportResult(executor: TRegexDFAExecutorNode, index: number): void;
}