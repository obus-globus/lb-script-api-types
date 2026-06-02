import type { GLSLLexer } from '../../../../../io/github/douira/glsl_transformer/GLSLLexer.d.ts'
import type { GLSLParser } from '../../../../../io/github/douira/glsl_transformer/GLSLParser.d.ts'
import type { EnhancedParser$ParsingStrategy } from '../../../../../io/github/douira/glsl_transformer/parser/EnhancedParser$ParsingStrategy.d.ts'
import type { TokenFilter } from '../../../../../io/github/douira/glsl_transformer/token_filter/TokenFilter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ParserInterface extends Object{
    getLexer(): GLSLLexer;
    getParser(): GLSLParser;
    setLLOnly(): void;
    setParsingStrategy(arg0: EnhancedParser$ParsingStrategy): void;
    setSLLOnly(): void;
    setThrowParseErrors(arg0: boolean): void;
    setTokenFilter(arg0: TokenFilter<Object>): void;
}