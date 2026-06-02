import type { RegexLanguage } from '../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { LiteralRegexExecNode } from '../../../../../com/oracle/truffle/regex/literal/LiteralRegexExecNode.d.ts'
import type { RegexAST } from '../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LiteralRegexEngine extends Object {
    static createNode(paramlanguage: RegexLanguage, paramast: RegexAST): LiteralRegexExecNode;
    constructor()
}