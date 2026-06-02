import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TRegexExecutorNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TRegexExecutorLocals extends Object {
    constructor(input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number, index: number)
    readonly fromIndex: number;
    readonly index: number;
    readonly input: TruffleString;
    // private loopCount: number;
    readonly maxIndex: number;
    readonly nextIndex: number;
    readonly regionFrom: number;
    readonly regionTo: number;
    getFromIndex(): number;
    getIndex(): number;
    getInput(): TruffleString;
    getMaxIndex(): number;
    getNextIndex(): number;
    getRegionFrom(): number;
    getRegionTo(): number;
    incLoopCount(executorNode: TRegexExecutorNode): void;
    setIndex(index: number): void;
    setNextIndex(nextIndex: number): void;
}