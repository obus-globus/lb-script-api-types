import type { RegexSource } from '../../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { RegexSyntaxException } from '../../../../../../com/oracle/truffle/regex/RegexSyntaxException.d.ts'
import type { RegexSyntaxException$ErrorCode } from '../../../../../../com/oracle/truffle/regex/RegexSyntaxException$ErrorCode.d.ts'
import type { JavaRegexLexer } from '../../../../../../com/oracle/truffle/regex/flavor/java/JavaRegexLexer.d.ts'
import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { RegexValidator } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexValidator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JavaRegexValidator extends Object implements RegexValidator {
    static createValidator(paramsource: RegexSource, paramcompilationBuffer: CompilationBuffer): JavaRegexValidator;
    constructor(source: RegexSource, compilationBuffer: CompilationBuffer)
    // private lexer: JavaRegexLexer;
    // private source: RegexSource;
    // private syntaxErrorHere(message: string, errorCode: RegexSyntaxException$ErrorCode): RegexSyntaxException;
    validate(): void;
}