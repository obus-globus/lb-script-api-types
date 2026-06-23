import type { GLSLLexer } from '../../../../../io/github/douira/glsl_transformer/GLSLLexer.d.ts'
import type { GLSLParser } from '../../../../../io/github/douira/glsl_transformer/GLSLParser.d.ts'
import type { GLSLParser$TranslationUnitContext } from '../../../../../io/github/douira/glsl_transformer/GLSLParser$TranslationUnitContext.d.ts'
import type { EnhancedParser$ParsingStrategy } from '../../../../../io/github/douira/glsl_transformer/parser/EnhancedParser$ParsingStrategy.d.ts'
import type { FilterTokenSource } from '../../../../../io/github/douira/glsl_transformer/parser/FilterTokenSource.d.ts'
import type { ParseShape } from '../../../../../io/github/douira/glsl_transformer/parser/ParseShape.d.ts'
import type { ParserInterface } from '../../../../../io/github/douira/glsl_transformer/parser/ParserInterface.d.ts'
import type { TokenFilter } from '../../../../../io/github/douira/glsl_transformer/token_filter/TokenFilter.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BufferedTokenStream } from '../../../../../org/antlr/v4/runtime/BufferedTokenStream.d.ts'
import type { IntStream } from '../../../../../org/antlr/v4/runtime/IntStream.d.ts'
import type { ParserRuleContext } from '../../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { ParseCancellationException } from '../../../../../org/antlr/v4/runtime/misc/ParseCancellationException.d.ts'
export class EnhancedParser extends Object implements ParserInterface {
    constructor()
    constructor(arg0: boolean)
    // private input: IntStream;
    internalErrorConsumer: (param0: ParseCancellationException, param1: ParseCancellationException) => void;
    readonly lexer: GLSLLexer;
    readonly parser: GLSLParser;
    readonly parsingStrategy: EnhancedParser$ParsingStrategy;
    readonly throwParseErrors: boolean;
    // private tokenSource: FilterTokenSource;
    tokenStream: BufferedTokenStream;
    getLexer(): GLSLLexer;
    getParser(): GLSLParser;
    getTokenStream(): BufferedTokenStream;
    // private handleParseCancellationException(arg0: ParseCancellationException): RuntimeException;
    parse(arg0: string): GLSLParser$TranslationUnitContext;
    parse<C extends ParserRuleContext>(arg0: string, arg1: ParseShape<C, any>): C;
    parse<C extends ParserRuleContext>(arg0: string, arg1: (param0: GLSLParser) => C): C;
    parse<C extends ParserRuleContext>(arg0: string, arg1: ParserRuleContext, arg2: ParseShape<C, any>): C;
    parse<C extends ParserRuleContext>(arg0: string, arg1: ParserRuleContext, arg2: (param0: GLSLParser) => C): C;
    // private parse<C extends ParserRuleContext>(arg0: IntStream, arg1: ParserRuleContext, arg2: (param0: GLSLParser) => C): C;
    setLLOnly(): void;
    setParsingStrategy(arg0: EnhancedParser$ParsingStrategy): void;
    setSLLOnly(): void;
    setThrowParseErrors(arg0: boolean): void;
    setTokenFilter(arg0: TokenFilter<any>): void;
}