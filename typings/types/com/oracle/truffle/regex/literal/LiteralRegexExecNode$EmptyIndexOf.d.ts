import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { LiteralRegexExecNode$EmptyLiteralRegexExecNode } from '../../../../../com/oracle/truffle/regex/literal/LiteralRegexExecNode$EmptyLiteralRegexExecNode.d.ts'
import type { RegexResult } from '../../../../../com/oracle/truffle/regex/result/RegexResult.d.ts'
import type { PreCalcResultVisitor } from '../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/PreCalcResultVisitor.d.ts'
import type { Encodings$Encoding } from '../../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
export class LiteralRegexExecNode$EmptyIndexOf extends LiteralRegexExecNode$EmptyLiteralRegexExecNode {
    constructor(preCalcResultVisitor: PreCalcResultVisitor, mustAdvance: boolean)
    execute(input: TruffleString, fromIndex: number, toIndex: number, regionFrom: number, regionTo: number, encoding: Encodings$Encoding): RegexResult;
    getImplName(): string;
}