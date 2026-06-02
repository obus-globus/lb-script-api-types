import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { NFAStateTransition } from '../../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAStateTransition.d.ts'
import type { TRegexExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorLocals.d.ts'
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
    addInitialState(stateId: number): void;
    curStatesEmpty(): boolean;
    getMarks(): number[];
    getResult(): number[];
    hasNext(): boolean;
    hasResult(): boolean;
    isResultPushed(): boolean;
    next(): number;
    nextState(): void;
    // private offsetLastGroup(recordOffset: number): number;
    pushResult(t: NFAStateTransition, copy: boolean): void;
    pushSuccessor(t: NFAStateTransition, copy: boolean): void;
    successorsEmpty(): boolean;
    toString(): string;
}