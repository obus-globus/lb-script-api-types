import type { LiteralRegexExecNode$LiteralRegexExecImplNode } from '../../../../../com/oracle/truffle/regex/literal/LiteralRegexExecNode$LiteralRegexExecImplNode.d.ts'
import type { InnerLiteral } from '../../../../../com/oracle/truffle/regex/tregex/parser/ast/InnerLiteral.d.ts'
import type { PreCalcResultVisitor } from '../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/PreCalcResultVisitor.d.ts'
export abstract class LiteralRegexExecNode$NonEmptyLiteralRegexExecNode extends LiteralRegexExecNode$LiteralRegexExecImplNode {
    constructor(preCalcResultVisitor: PreCalcResultVisitor)
    // private literal: InnerLiteral;
    // private literalLength: number;
    getLiteral(): string;
}