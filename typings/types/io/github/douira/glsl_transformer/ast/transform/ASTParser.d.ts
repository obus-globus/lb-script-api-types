import type { GLSLLexer } from '../../../../../../io/github/douira/glsl_transformer/GLSLLexer.d.ts'
import type { GLSLParser } from '../../../../../../io/github/douira/glsl_transformer/GLSLParser.d.ts'
import type { TranslationUnit } from '../../../../../../io/github/douira/glsl_transformer/ast/node/TranslationUnit.d.ts'
import type { ASTNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Expression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/Expression.d.ts'
import type { ExternalDeclaration } from '../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/ExternalDeclaration.d.ts'
import type { Statement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/Statement.d.ts'
import type { Root } from '../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { RootSupplier } from '../../../../../../io/github/douira/glsl_transformer/ast/query/RootSupplier.d.ts'
import type { ASTParser$ASTCacheStrategy } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/ASTParser$ASTCacheStrategy.d.ts'
import type { ASTParser$ParsingCacheStrategy } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/ASTParser$ParsingCacheStrategy.d.ts'
import type { EnhancedParser } from '../../../../../../io/github/douira/glsl_transformer/parser/EnhancedParser.d.ts'
import type { EnhancedParser$ParsingStrategy } from '../../../../../../io/github/douira/glsl_transformer/parser/EnhancedParser$ParsingStrategy.d.ts'
import type { ParseShape } from '../../../../../../io/github/douira/glsl_transformer/parser/ParseShape.d.ts'
import type { ParserInterface } from '../../../../../../io/github/douira/glsl_transformer/parser/ParserInterface.d.ts'
import type { TokenFilter } from '../../../../../../io/github/douira/glsl_transformer/token_filter/TokenFilter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
export class ASTParser extends Object implements ParserInterface {
    static _getInternalInstance(): ASTParser;
    constructor()
    constructor(arg0: EnhancedParser, arg1: { [key: string]: any })
    // private astCacheStrategy: ASTParser$ASTCacheStrategy;
    readonly buildCache: { [key: string]: any };
    readonly parseLineDirectives: boolean;
    readonly parser: EnhancedParser;
    getLexer(): GLSLLexer;
    getParser(): GLSLParser;
    parseExpression(arg0: Root, arg1: string[]): Expression[];
    parseExpression(arg0: Root, arg1: string): Expression;
    parseExpression(arg0: RootSupplier, arg1: string): Expression;
    parseExternalDeclaration(arg0: Root, arg1: string): ExternalDeclaration;
    parseExternalDeclaration(arg0: RootSupplier, arg1: string): ExternalDeclaration;
    parseExternalDeclarations(arg0: Root, arg1: string[]): ExternalDeclaration[];
    parseNode<N extends ASTNode, C extends ParserRuleContext>(arg0: Root, arg1: ParseShape<C, N>, arg2: string): N;
    // private parseNodeCachedUncloned<N extends ASTNode, C extends ParserRuleContext>(arg0: string, arg1: ParseShape<C, N>): N;
    parseNodeSeparate<N extends ASTNode, C extends ParserRuleContext>(arg0: RootSupplier, arg1: ParseShape<C, N>, arg2: string): N;
    parseStatement(arg0: Root, arg1: string): Statement;
    parseStatement(arg0: RootSupplier, arg1: string): Statement;
    parseStatements(arg0: Root, arg1: string[]): Statement[];
    parseTranslationUnit(arg0: Root, arg1: string): TranslationUnit;
    parseTranslationUnit(arg0: RootSupplier, arg1: string): TranslationUnit;
    setASTCacheStrategy(arg0: ASTParser$ASTCacheStrategy): void;
    setBuildCache(arg0: { [key: string]: any }): void;
    // private setBuilderTokenStream(): void;
    setLLOnly(): void;
    setParseLineDirectives(arg0: boolean): void;
    setParser(arg0: EnhancedParser): void;
    setParsingCacheStrategy(arg0: ASTParser$ParsingCacheStrategy): void;
    setParsingStrategy(arg0: EnhancedParser$ParsingStrategy): void;
    setSLLOnly(): void;
    setThrowParseErrors(arg0: boolean): void;
    setTokenFilter(arg0: TokenFilter<Object>): void;
    // private unsetBuilderTokenStream(): void;
}