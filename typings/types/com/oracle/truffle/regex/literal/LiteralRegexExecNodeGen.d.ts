import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { RegexLanguage } from '../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { LiteralRegexExecNode } from '../../../../../com/oracle/truffle/regex/literal/LiteralRegexExecNode.d.ts'
import type { LiteralRegexExecNode$LiteralRegexExecImplNode } from '../../../../../com/oracle/truffle/regex/literal/LiteralRegexExecNode$LiteralRegexExecImplNode.d.ts'
import type { RegexResult } from '../../../../../com/oracle/truffle/regex/result/RegexResult.d.ts'
import type { RegexAST } from '../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
export class LiteralRegexExecNodeGen extends LiteralRegexExecNode {
    static create(paramlanguage: RegexLanguage, paramast: RegexAST, paramimplNode: LiteralRegexExecNode$LiteralRegexExecImplNode): LiteralRegexExecNode;
    private constructor(language: RegexLanguage, ast: RegexAST, implNode: LiteralRegexExecNode$LiteralRegexExecImplNode)
    execute(frame: VirtualFrame): RegexResult;
    execute(frameValue: VirtualFrame, arg0Value: TruffleString, arg1Value: number, arg2Value: number, arg3Value: number, arg4Value: number): RegexResult;
}