import type { AbstractRegexObject } from '../../../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { RegexFlags } from '../../../../../../com/oracle/truffle/regex/RegexFlags.d.ts'
import type { RegexLanguage } from '../../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { RegexSource } from '../../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { RegexSyntaxException } from '../../../../../../com/oracle/truffle/regex/RegexSyntaxException.d.ts'
import type { RegexSyntaxException$ErrorCode } from '../../../../../../com/oracle/truffle/regex/RegexSyntaxException$ErrorCode.d.ts'
import type { Range } from '../../../../../../com/oracle/truffle/regex/charset/Range.d.ts'
import type { JSRegexLexer } from '../../../../../../com/oracle/truffle/regex/flavor/js/JSRegexLexer.d.ts'
import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { RegexASTBuilder } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexASTBuilder.d.ts'
import type { RegexParser } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexParser.d.ts'
import type { Token } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Token.d.ts'
import type { Token$LiteralCharacter } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Token$LiteralCharacter.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSRegexParser extends Object implements RegexParser {
    constructor(language: RegexLanguage, source: RegexSource, compilationBuffer: CompilationBuffer)
    // private astBuilder: RegexASTBuilder;
    // private curCharClass: Range[];
    // private lexer: JSRegexLexer;
    // private source: RegexSource;
    // private addMultiLineCaret(token: Token): void;
    // private addMultiLineDollar(token: Token): void;
    // private checkNamedCaptureGroups(ast: RegexAST): void;
    getFlags(): RegexFlags;
    // private getLocalFlags(): RegexFlags;
    getNamedCaptureGroups(): AbstractRegexObject;
    // private literalChar(literalCharacter: Token$LiteralCharacter): void;
    parse(): RegexAST;
    // private syntaxError(msg: string, errorCode: RegexSyntaxException$ErrorCode): RegexSyntaxException;
}