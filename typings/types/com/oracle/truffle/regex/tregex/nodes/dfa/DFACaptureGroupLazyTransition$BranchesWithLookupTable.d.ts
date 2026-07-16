import type { DFACaptureGroupLazyTransition$Branches } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupLazyTransition$Branches.d.ts'
import type { DFACaptureGroupPartialTransition } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupPartialTransition.d.ts'
import type { TRegexDFAExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorLocals.d.ts'
import type { TRegexDFAExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorNode.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DFACaptureGroupLazyTransition$BranchesWithLookupTable extends DFACaptureGroupLazyTransition$Branches {
    static create(paramtransitions: DFACaptureGroupPartialTransition[], paramlookupTable: number[]): DFACaptureGroupLazyTransition$BranchesWithLookupTable;
    constructor(transitions: DFACaptureGroupPartialTransition[], lookupTable: number[])
    // private lookupTable: number[];
    apply(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode): void;
    apply(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode, preFinal: boolean): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
}