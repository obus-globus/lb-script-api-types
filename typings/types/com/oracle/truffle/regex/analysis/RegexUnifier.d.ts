import type { RegexSource } from '../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { RegexLexer } from '../../../../../com/oracle/truffle/regex/tregex/parser/RegexLexer.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RegexUnifier extends Object {
    constructor(source: RegexSource)
    // private dump: StringBuilder;
    // private lexer: RegexLexer;
    // private source: RegexSource;
    getUnifiedPattern(): string;
}