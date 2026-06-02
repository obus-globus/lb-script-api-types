import type { AbstractRegexObject } from '../../../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { RegexLanguage } from '../../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { RegexSource } from '../../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { RegexSyntaxException } from '../../../../../../com/oracle/truffle/regex/RegexSyntaxException.d.ts'
import type { RegexSyntaxException$ErrorCode } from '../../../../../../com/oracle/truffle/regex/RegexSyntaxException$ErrorCode.d.ts'
import type { Range } from '../../../../../../com/oracle/truffle/regex/charset/Range.d.ts'
import type { PythonFlags } from '../../../../../../com/oracle/truffle/regex/flavor/python/PythonFlags.d.ts'
import type { PythonREMode } from '../../../../../../com/oracle/truffle/regex/flavor/python/PythonREMode.d.ts'
import type { PythonRegexLexer } from '../../../../../../com/oracle/truffle/regex/flavor/python/PythonRegexLexer.d.ts'
import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { RegexASTBuilder } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexASTBuilder.d.ts'
import type { RegexParser } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexParser.d.ts'
import type { Token$BackReference } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Token$BackReference.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PythonRegexParser extends Object implements RegexParser {
    constructor(language: RegexLanguage, source: RegexSource, compilationBuffer: CompilationBuffer)
    // private astBuilder: RegexASTBuilder;
    // private curCharClass: Range[];
    // private curCharClassCaseClosure: Range[];
    // private lexer: PythonRegexLexer;
    // private mode: PythonREMode;
    getFlags(): PythonFlags;
    // private getLocalFlags(): PythonFlags;
    getNamedCaptureGroups(): AbstractRegexObject;
    // private insideLookBehind(): boolean;
    // private literalChar(codePoint: number): void;
    parse(): RegexAST;
    // private syntaxError(msg: string, errorCode: RegexSyntaxException$ErrorCode): RegexSyntaxException;
    // private syntaxErrorAtAbs(msg: string, i: number, errorCode: RegexSyntaxException$ErrorCode): RegexSyntaxException;
    // private syntaxErrorHere(msg: string, errorCode: RegexSyntaxException$ErrorCode): RegexSyntaxException;
    // private verifyGroupReference(backRefToken: Token$BackReference): void;
}