import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { LiteralRegexExecNode$StartsWith } from '../../../../../com/oracle/truffle/regex/literal/LiteralRegexExecNode$StartsWith.d.ts'
import type { RegexResult } from '../../../../../com/oracle/truffle/regex/result/RegexResult.d.ts'
import type { PreCalcResultVisitor } from '../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/PreCalcResultVisitor.d.ts'
import type { Encodings$Encoding } from '../../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
export class LiteralRegexExecNodeGen$StartsWithNodeGen extends LiteralRegexExecNode$StartsWith {
    static create(parampreCalcResultVisitor: PreCalcResultVisitor): LiteralRegexExecNode$StartsWith;
    private constructor(preCalcResultVisitor: PreCalcResultVisitor)
    execute(arg0Value: TruffleString, arg1Value: number, arg2Value: number, arg3Value: number, arg4Value: number, arg5Value: Encodings$Encoding): RegexResult;
}