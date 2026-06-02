import type { DFAAbstractStateNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFAAbstractStateNode.d.ts'
import type { TRegexDFAExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorLocals.d.ts'
import type { TRegexDFAExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorNode.d.ts'
import type { InnerLiteral } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/InnerLiteral.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
export class DFAFindInnerLiteralStateNode extends DFAAbstractStateNode {
    constructor(id: number, successors: number[], innerLiteral: InnerLiteral)
    readonly innerLiteral: InnerLiteral;
    executeInnerLiteralSearch(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode): number;
    getInnerLiteral(): InnerLiteral;
    toJson(): JsonValue;
}