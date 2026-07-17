import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { LiteralRegexExecNode$EndsWith } from '../../../../../com/oracle/truffle/regex/literal/LiteralRegexExecNode$EndsWith.d.ts'
import type { RegexResult } from '../../../../../com/oracle/truffle/regex/result/RegexResult.d.ts'
import type { PreCalcResultVisitor } from '../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/PreCalcResultVisitor.d.ts'
import type { Encoding } from '../../../../../com/oracle/truffle/regex/tregex/string/Encoding.d.ts'
export class LiteralRegexExecNodeGen$EndsWithNodeGen extends LiteralRegexExecNode$EndsWith {
    static create(parampreCalcResultVisitor: PreCalcResultVisitor, paramsticky: boolean): LiteralRegexExecNode$EndsWith;
    private constructor(preCalcResultVisitor: PreCalcResultVisitor, sticky: boolean)
    execute(arg0Value: TruffleString, arg1Value: number, arg2Value: number, arg3Value: number, arg4Value: number, arg5Value: Encoding): RegexResult;
}