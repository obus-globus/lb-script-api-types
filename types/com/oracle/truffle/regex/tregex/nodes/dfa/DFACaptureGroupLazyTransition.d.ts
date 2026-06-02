import type { TRegexDFAExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorLocals.d.ts'
import type { TRegexDFAExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorNode.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class DFACaptureGroupLazyTransition extends Object {
    constructor()
    apply(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode): void;
    apply(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode, preFinal: boolean): void;
    applyPreFinal(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode): void;
    getCost(): number;
    isEmpty(): boolean;
}