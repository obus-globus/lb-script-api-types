import type { RegexFlags } from '../../../../../../com/oracle/truffle/regex/RegexFlags.d.ts'
import type { RegexLanguage } from '../../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { RegexSource } from '../../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { RegexSyntaxException } from '../../../../../../com/oracle/truffle/regex/RegexSyntaxException.d.ts'
import type { RegexSyntaxException$ErrorCode } from '../../../../../../com/oracle/truffle/regex/RegexSyntaxException$ErrorCode.d.ts'
import type { JSRegexLexer } from '../../../../../../com/oracle/truffle/regex/flavor/js/JSRegexLexer.d.ts'
import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { RegexValidator } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexValidator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSRegexValidator extends Object implements RegexValidator {
    constructor(language: RegexLanguage, source: RegexSource, compilationBuffer: CompilationBuffer)
    // private compilationBuffer: CompilationBuffer;
    // private flags: RegexFlags;
    // private language: RegexLanguage;
    // private lexer: JSRegexLexer;
    // private source: RegexSource;
    // private checkNamedCaptureGroups(): void;
    // private parseDryRun(): void;
    // private syntaxError(msg: string, errorCode: RegexSyntaxException$ErrorCode): RegexSyntaxException;
    validate(): void;
}