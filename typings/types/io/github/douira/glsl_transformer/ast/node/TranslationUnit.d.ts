import type { VersionStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/VersionStatement.d.ts'
import type { ASTNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { ListASTNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ListASTNode.d.ts'
import type { ExternalDeclaration } from '../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/ExternalDeclaration.d.ts'
import type { CompoundStatement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/CompoundStatement.d.ts'
import type { Statement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/Statement.d.ts'
import type { OutputOptions } from '../../../../../../io/github/douira/glsl_transformer/ast/print/OutputOptions.d.ts'
import type { Root } from '../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTInjectionPoint } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/ASTInjectionPoint.d.ts'
import type { ASTParser } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/ASTParser.d.ts'
import type { ASTListener } from '../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TranslationUnit extends ListASTNode<ExternalDeclaration> {
    static clone(paramarg0: ASTNode | null): ASTNode | null;
    static clone(paramarg0: (ASTNode | null)[]): Stream<ASTNode>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: VersionStatement, arg1: Stream<ExternalDeclaration>)
    constructor(arg0: VersionStatement, arg1: Stream<ExternalDeclaration>, arg2: OutputOptions)
    constructor(arg0: Stream<ExternalDeclaration>)
    outputOptions: OutputOptions;
    versionStatement: VersionStatement;
    accept<R extends unknown>(arg0: ASTVisitor<R>): R;
    appendFunctionBody(arg0: string, arg1: Statement[]): void;
    appendFunctionBody(arg0: string, arg1: Statement): void;
    appendMainFunctionBody(arg0: Statement[]): void;
    appendMainFunctionBody(arg0: Statement): void;
    appendMainFunctionBody(arg0: ASTParser, arg1: string[]): void;
    appendMainFunctionBody(arg0: ASTParser, arg1: string): void;
    clone(): TranslationUnit;
    cloneInto(arg0: Root): TranslationUnit;
    ensureVersionStatement(): void;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    getOneFunctionDefinitionBody(arg0: string): CompoundStatement;
    getOneFunctionDefinitionBodyOptional(arg0: string): Optional<CompoundStatement>;
    getOneMainDefinitionBody(): CompoundStatement;
    getVersionStatement(): VersionStatement;
    injectNode(arg0: ASTInjectionPoint, arg1: ExternalDeclaration): void;
    injectNodes(arg0: ASTInjectionPoint, arg1: ExternalDeclaration[]): void;
    injectNodes(arg0: ASTInjectionPoint, arg1: Stream<ExternalDeclaration>): void;
    parseAndInjectNode(arg0: ASTParser, arg1: ASTInjectionPoint, arg2: string): void;
    parseAndInjectNodes(arg0: ASTParser, arg1: ASTInjectionPoint, arg2: Stream<string>): void;
    parseAndInjectNodes(arg0: ASTParser, arg1: ASTInjectionPoint, arg2: string[]): void;
    prependFunctionBody(arg0: string, arg1: Statement[]): void;
    prependFunctionBody(arg0: string, arg1: Statement): void;
    prependMainFunctionBody(arg0: Statement[]): void;
    prependMainFunctionBody(arg0: Statement): void;
    prependMainFunctionBody(arg0: ASTParser, arg1: string[]): void;
    prependMainFunctionBody(arg0: ASTParser, arg1: string): void;
    setVersionStatement(arg0: VersionStatement): void;
}