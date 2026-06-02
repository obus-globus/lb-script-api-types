import type { AbstractRegexObject } from '../../../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { RegexLanguage } from '../../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { RegexSource } from '../../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { RegexSyntaxException } from '../../../../../../com/oracle/truffle/regex/RegexSyntaxException.d.ts'
import type { RegexSyntaxException$ErrorCode } from '../../../../../../com/oracle/truffle/regex/RegexSyntaxException$ErrorCode.d.ts'
import type { JavaFlags } from '../../../../../../com/oracle/truffle/regex/flavor/java/JavaFlags.d.ts'
import type { JavaRegexLexer } from '../../../../../../com/oracle/truffle/regex/flavor/java/JavaRegexLexer.d.ts'
import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { RegexASTBuilder } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexASTBuilder.d.ts'
import type { RegexParser } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexParser.d.ts'
import type { Token$LiteralString } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Token$LiteralString.d.ts'
import type { Token$Quantifier } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Token$Quantifier.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JavaRegexParser extends Object implements RegexParser {
    static createParser(paramlanguage: RegexLanguage, paramsource: RegexSource, paramcompilationBuffer: CompilationBuffer): RegexParser;
    constructor(source: RegexSource, astBuilder: RegexASTBuilder, compilationBuffer: CompilationBuffer)
    // private astBuilder: RegexASTBuilder;
    // private lexer: JavaRegexLexer;
    // private source: RegexSource;
    // private addCaret(): void;
    // private addCharClass(charSet: (Object | null)[]): void;
    // private addDollar(): void;
    // private addQuantifier(quantifier: Token$Quantifier): void;
    // private buildWordBoundaryAssertion(wordChars: (Object | null)[]): void;
    // private buildWordNonBoundaryAssertion(wordChars: (Object | null)[], nonWordChars: (Object | null)[]): void;
    // private caret(): void;
    // private dollar(): void;
    getFlags(): JavaFlags;
    getNamedCaptureGroups(): AbstractRegexObject;
    // private lineTerminators(): void;
    // private literalString(token: Token$LiteralString): void;
    // private nextSequence(): void;
    parse(): RegexAST;
    // private popGroup(): void;
    // private pushGroup(): void;
    // private pushLookAheadAssertion(): void;
    // private pushLookBehindAssertion(): void;
    // private syntaxErrorHere(message: string, errorCode: RegexSyntaxException$ErrorCode): RegexSyntaxException;
}