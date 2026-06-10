import type { RegexLanguage } from '../../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { RegexSource } from '../../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { UnicodeProperties } from '../../../../../../com/oracle/truffle/regex/charset/UnicodeProperties.d.ts'
import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { CaseFoldData$CaseFoldAlgorithm } from '../../../../../../com/oracle/truffle/regex/tregex/parser/CaseFoldData$CaseFoldAlgorithm.d.ts'
import type { RegexFlavor } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexFlavor.d.ts'
import type { RegexFlavor$EqualsIgnoreCasePredicate } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexFlavor$EqualsIgnoreCasePredicate.d.ts'
import type { RegexLexer } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexLexer.d.ts'
import type { RegexParser } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexParser.d.ts'
import type { RegexValidator } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexValidator.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
export class RubyFlavor extends RegexFlavor {
    static INSTANCE: RubyFlavor;
    static UNICODE: UnicodeProperties;
    private constructor()
    createLexer(source: RegexSource, compilationBuffer: CompilationBuffer): RegexLexer;
    createParser(language: RegexLanguage, source: RegexSource, compilationBuffer: CompilationBuffer): RegexParser;
    createValidator(language: RegexLanguage, source: RegexSource, compilationBuffer: CompilationBuffer): RegexValidator;
    getCaseFoldAlgorithm(ast: RegexAST): CaseFoldData$CaseFoldAlgorithm;
    getEqualsIgnoreCasePredicate(ast: RegexAST): (param0: number, param1: number, param2: boolean) => boolean;
    getName(): string;
}