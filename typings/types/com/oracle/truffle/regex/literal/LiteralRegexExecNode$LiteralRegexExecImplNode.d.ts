import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { PreCalculatedResultFactory } from '../../../../../com/oracle/truffle/regex/result/PreCalculatedResultFactory.d.ts'
import type { RegexResult } from '../../../../../com/oracle/truffle/regex/result/RegexResult.d.ts'
import type { PreCalcResultVisitor } from '../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/PreCalcResultVisitor.d.ts'
import type { Encoding } from '../../../../../com/oracle/truffle/regex/tregex/string/Encoding.d.ts'
export abstract class LiteralRegexExecNode$LiteralRegexExecImplNode extends Node {
    constructor(preCalcResultVisitor: PreCalcResultVisitor)
    // private resultFactory: PreCalculatedResultFactory;
    createFromEnd(end: number): RegexResult;
    createFromStart(start: number): RegexResult;
    execute(input: TruffleString, fromIndex: number, toIndex: number, regionFrom: number, regionTo: number, encoding: Encoding): RegexResult;
    getImplName(): string;
    getLiteral(): string;
}