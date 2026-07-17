import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TRegexExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorLocals.d.ts'
import type { TRegexNFAExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/nfa/TRegexNFAExecutorNode.d.ts'
export class TRegexNFAExecutorLocals extends TRegexExecutorLocals {
    constructor(input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number, index: number, nCaptureGroups: number, nStates: number, trackLastGroup: boolean)
    // private curStates: number[];
    // private curStatesLength: number;
    // private frameSize: number;
    // private iCurStates: number;
    readonly marks: number[];
    // private maxSize: number;
    // private nCaptureGroups: number;
    // private nextStates: number[];
    // private nextStatesLength: number;
    readonly result: number[];
    readonly resultPushed: boolean;
    // private trackLastGroup: boolean;
    addInitialState(stateRecord: number): void;
    curStatesEmpty(): boolean;
    getMarks(): number[];
    getResult(): number[];
    hasNext(): boolean;
    hasResult(): boolean;
    isResultPushed(): boolean;
    next(): number;
    nextState(): void;
    // private offsetLastGroup(recordOffset: number): number;
    pushResult(nfa: TRegexNFAExecutorNode, transitionRecord: number, copy: boolean): void;
    pushSuccessor(nfa: TRegexNFAExecutorNode, transitionRecord: number, copy: boolean): void;
    successorsEmpty(): boolean;
    toString(): string;
}