import type { DFAAbstractNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFAAbstractNode.d.ts'
import type { TRegexDFAExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorLocals.d.ts'
import type { TRegexDFAExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorNode.d.ts'
export abstract class DFAAbstractTransitionNode extends DFAAbstractNode {
    constructor(id: number, successor: number)
    readonly successor: number;
    apply(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode): void;
    getSuccessor(): number;
}