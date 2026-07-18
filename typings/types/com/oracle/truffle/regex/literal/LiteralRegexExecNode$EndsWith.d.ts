import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { LiteralRegexExecNode$LiteralRegexExecWithRegionMatchNode } from '../../../../../com/oracle/truffle/regex/literal/LiteralRegexExecNode$LiteralRegexExecWithRegionMatchNode.d.ts'
import type { RegexResult } from '../../../../../com/oracle/truffle/regex/result/RegexResult.d.ts'
import type { PreCalcResultVisitor } from '../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/PreCalcResultVisitor.d.ts'
import type { Encodings$Encoding } from '../../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
export abstract class LiteralRegexExecNode$EndsWith extends LiteralRegexExecNode$LiteralRegexExecWithRegionMatchNode {
    constructor(preCalcResultVisitor: PreCalcResultVisitor, sticky: boolean)
    // private sticky: boolean;
    getImplName(): string;
    run(input: TruffleString, fromIndex: number, toIndex: number, regionFrom: number, regionTo: number, encoding: Encodings$Encoding): RegexResult;
}