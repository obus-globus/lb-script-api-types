import type { VirtualFrame } from '../../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$CodeRange } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$CodeRange.d.ts'
import type { NFA } from '../../../../../../../com/oracle/truffle/regex/tregex/nfa/NFA.d.ts'
import type { TRegexExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorLocals.d.ts'
import type { TRegexExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorNode.d.ts'
import type { TRegexNFAExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/nfa/TRegexNFAExecutorLocals.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TRegexNFAExecutorNode extends TRegexExecutorNode {
    static ASTRAL_PROBABILITY: number;
    static BMP_PROBABILITY: number;
    static CONTINUE_PROBABILITY: number;
    static EXIT_PROBABILITY: number;
    static LATIN1_PROBABILITY: number;
    static create(paramnfa: NFA): TRegexNFAExecutorNode;
    static inputIncRaw(paramindex: number, paramoffset: number, paramforward: boolean): number;
    private constructor(nfa: NFA, numberOfTransitions: number)
    private constructor(copy: TRegexNFAExecutorNode)
    // private dfaGeneratorBailedOut: boolean;
    // private nfa: NFA;
    // private searching: boolean;
    // private trackLastGroup: boolean;
    createLocals(input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number, index: number): TRegexExecutorLocals;
    execute(frame: VirtualFrame, abstractLocals: TRegexExecutorLocals, codeRange: TruffleString$CodeRange): Object;
    // private expandState(locals: TRegexNFAExecutorLocals, stateId: number, c: number, isLoopBack: boolean): void;
    // private findNextStates(locals: TRegexNFAExecutorLocals, codeRange: TruffleString$CodeRange): void;
    // private findNextStatesAtEnd(locals: TRegexNFAExecutorLocals): void;
    getNFA(): NFA;
    getName(): string;
    getNumberOfStates(): number;
    isForward(): boolean;
    isTrivial(): boolean;
    notifyDfaGeneratorBailedOut(): void;
    shallowCopy(): TRegexNFAExecutorNode;
    writesCaptureGroups(): boolean;
}