import type { CGTrackingAbstractTransitionNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/CGTrackingAbstractTransitionNode.d.ts'
import type { DFACaptureGroupLazyTransition } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupLazyTransition.d.ts'
import type { TRegexDFAExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorLocals.d.ts'
import type { TRegexDFAExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorNode.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CGTrackingTransitionNode extends CGTrackingAbstractTransitionNode {
    static create(paramid: number, paramsuccessor: number, paramtransition: DFACaptureGroupLazyTransition, paramlastTransitionIndex: number): CGTrackingTransitionNode;
    constructor(id: number, successor: number, transition: DFACaptureGroupLazyTransition, lastTransitionIndex: number)
    // private lastTransitionIndex: number;
    // private transition: DFACaptureGroupLazyTransition;
    apply(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode): void;
    equals(obj: Object | null): boolean;
    getCGTrackingCost(): number;
    hashCode(): number;
}