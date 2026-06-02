import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$MaterializeNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$MaterializeNode.d.ts'
import type { RegexExecNode } from '../../../../../com/oracle/truffle/regex/RegexExecNode.d.ts'
import type { RegexLanguage } from '../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { LiteralRegexExecNode$LiteralRegexExecImplNode } from '../../../../../com/oracle/truffle/regex/literal/LiteralRegexExecNode$LiteralRegexExecImplNode.d.ts'
import type { RegexResult } from '../../../../../com/oracle/truffle/regex/result/RegexResult.d.ts'
import type { RegexAST } from '../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { JsonConvertible } from '../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonValue } from '../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
export abstract class LiteralRegexExecNode extends RegexExecNode implements JsonConvertible {
    constructor(language: RegexLanguage, ast: RegexAST, implNode: LiteralRegexExecNode$LiteralRegexExecImplNode)
    // private implNode: LiteralRegexExecNode$LiteralRegexExecImplNode;
    // private materializeNode: TruffleString$MaterializeNode;
    doTString(input: TruffleString, fromIndex: number, toIndex: number, regionFrom: number, regionTo: number): RegexResult;
    execute(frame: VirtualFrame, input: TruffleString, fromIndex: number, toIndex: number, regionFrom: number, regionTo: number): RegexResult;
    getEngineLabel(): string;
    toJson(): JsonValue;
}