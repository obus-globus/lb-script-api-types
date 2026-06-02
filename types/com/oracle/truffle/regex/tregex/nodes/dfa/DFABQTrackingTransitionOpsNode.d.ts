import type { DFAAbstractTransitionNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFAAbstractTransitionNode.d.ts'
import type { TRegexDFAExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorLocals.d.ts'
import type { TRegexDFAExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorNode.d.ts'
export class DFABQTrackingTransitionOpsNode extends DFAAbstractTransitionNode {
    constructor(id: number, successor: number, operations: number[])
    readonly operations: number[];
    apply(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode): void;
    getOperations(): number[];
}