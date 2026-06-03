import type { DFACaptureGroupLazyTransition$Branches } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupLazyTransition$Branches.d.ts'
import type { DFACaptureGroupPartialTransition } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupPartialTransition.d.ts'
import type { TRegexDFAExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorLocals.d.ts'
import type { TRegexDFAExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorNode.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DFACaptureGroupLazyTransition$BranchesIndirect extends DFACaptureGroupLazyTransition$Branches {
    static create(paramtransitions: (Object | null)[], parampossibleValues: number[]): DFACaptureGroupLazyTransition$BranchesIndirect;
    constructor(transitions: DFACaptureGroupPartialTransition[], possibleValues: number[])
    // private possibleValues: number[];
    apply(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode): void;
    apply(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode, preFinal: boolean): void;
    equals(obj: Object | null): boolean;
    hashCode(): number;
}