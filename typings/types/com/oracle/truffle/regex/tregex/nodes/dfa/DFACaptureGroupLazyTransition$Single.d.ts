import type { DFACaptureGroupLazyTransition } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupLazyTransition.d.ts'
import type { DFACaptureGroupPartialTransition } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupPartialTransition.d.ts'
import type { TRegexDFAExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorLocals.d.ts'
import type { TRegexDFAExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorNode.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DFACaptureGroupLazyTransition$Single extends DFACaptureGroupLazyTransition {
    static create(paramtransition: DFACaptureGroupPartialTransition): DFACaptureGroupLazyTransition$Single;
    constructor(transition: DFACaptureGroupPartialTransition)
    // private transition: DFACaptureGroupPartialTransition;
    apply(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode): void;
    apply(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode, preFinal: boolean): void;
    equals(obj: Object | null): boolean;
    getCost(): number;
    hashCode(): number;
}