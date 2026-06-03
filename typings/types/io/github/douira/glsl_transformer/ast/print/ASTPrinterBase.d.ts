import type { ASTNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { TokenProcessor } from '../../../../../../io/github/douira/glsl_transformer/ast/print/TokenProcessor.d.ts'
import type { TokenRole } from '../../../../../../io/github/douira/glsl_transformer/ast/print/TokenRole.d.ts'
import type { PrintToken } from '../../../../../../io/github/douira/glsl_transformer/ast/print/token/PrintToken.d.ts'
import type { SourceLocation } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/SourceLocation.d.ts'
import type { ASTListener } from '../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTListenerVisitor } from '../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListenerVisitor.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ASTPrinterBase extends ASTListenerVisitor<void> {
    static walk(paramarg0: ASTListener, paramarg1: ASTNode): Object | null;
    static walkAndListen(paramarg0: ASTNode): Object | null;
    constructor(arg0: TokenProcessor)
    // private currentNode: ASTNode;
    // private lastToken: PrintToken;
    // private tokenProcessor: TokenProcessor;
    appendToken(arg0: PrintToken): void;
    compactCommonNewline(): void;
    compactCommonNewline(arg0: Class<ASTNode>): void;
    defaultResult(): void;
    emitBreakableSpace(): void;
    emitCommonNewline(): void;
    emitExactNewline(): void;
    emitExactSpace(): void;
    emitExactWhitespace(arg0: string): void;
    emitExtendableSpace(): void;
    emitLineDirective(arg0: SourceLocation): void;
    emitLiteral(arg0: TokenRole, arg1: string): void;
    emitLiteral(arg0: string): void;
    emitLiteralSafe(arg0: string): void;
    emitLiterals(arg0: TokenRole, arg1: string[]): void;
    emitLiterals(arg0: string[]): void;
    // private emitNewline(arg0: TokenRole): void;
    // private emitSpace(arg0: TokenRole): void;
    emitStatementEnd(): void;
    emitToken(arg0: PrintToken): void;
    emitTokens(arg0: PrintToken[]): void;
    emitType(arg0: TokenRole, arg1: number): void;
    emitType(arg0: TokenRole, arg1: number[]): void;
    emitType(arg0: number): void;
    emitType(arg0: number[]): void;
    emitWhitespace(arg0: TokenRole, arg1: string): void;
    enterContext(arg0: ASTNode): void;
    finalizePrinting(): void;
    generateString(): string;
    getCurrentNode(): ASTNode;
    indent(): void;
    initialResult(): void;
    replaceToken(arg0: PrintToken): void;
    setCurrentNode(arg0: ASTNode): void;
    superNodeTypeResult(): void;
    unindent(): void;
    visit(arg0: ASTNode): void;
    visit(arg0: void, arg1: ASTNode): void;
    visitCommaSpaced(arg0: ASTNode[]): void;
    visitData(arg0: void, arg1: Object): void;
    visitData(arg0: Object): void;
    visitSafe(arg0: ASTNode): boolean;
    visitSafe(arg0: void, arg1: ASTNode): void;
    visitWithSeparator(arg0: ASTNode[], arg1: () => void): void;
}