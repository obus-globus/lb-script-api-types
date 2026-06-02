import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ByteIndexOfStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ByteIndexOfStringNode.d.ts'
import type { LiteralRegexExecNode$NonEmptyLiteralRegexExecNode } from '../../../../../com/oracle/truffle/regex/literal/LiteralRegexExecNode$NonEmptyLiteralRegexExecNode.d.ts'
import type { RegexResult } from '../../../../../com/oracle/truffle/regex/result/RegexResult.d.ts'
import type { PreCalcResultVisitor } from '../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/PreCalcResultVisitor.d.ts'
import type { Encodings$Encoding } from '../../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
export abstract class LiteralRegexExecNode$IndexOfString extends LiteralRegexExecNode$NonEmptyLiteralRegexExecNode {
    constructor(preCalcResultVisitor: PreCalcResultVisitor)
    // private indexOfStringNode: TruffleString$ByteIndexOfStringNode;
    getImplName(): string;
    run(input: TruffleString, fromIndex: number, toIndex: number, regionFrom: number, regionTo: number, encoding: Encodings$Encoding): RegexResult;
}