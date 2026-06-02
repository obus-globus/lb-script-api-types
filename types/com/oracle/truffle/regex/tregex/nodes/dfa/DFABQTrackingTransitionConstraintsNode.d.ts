import type { DFAAbstractStateNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFAAbstractStateNode.d.ts'
import type { TRegexDFAExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorLocals.d.ts'
import type { TRegexDFAExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorNode.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
export class DFABQTrackingTransitionConstraintsNode extends DFAAbstractStateNode {
    static constraintsAreSatisfied(paramlocals: TRegexDFAExecutorLocals, paramexecutor: TRegexDFAExecutorNode, paramconstraints: number[]): boolean;
    constructor(id: number, successors: number[], constraints: number[][])
    constraints: number[][];
    toJson(): JsonValue;
}