import type { ASTNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { InnerASTNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/InnerASTNode.d.ts'
import type { ASTBaseVisitor } from '../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTBaseVisitor.d.ts'
import type { ASTListener } from '../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ASTWalker<R extends unknown> extends ASTBaseVisitor<R> {
    static walk<R extends unknown>(paramarg0: ASTListener, paramarg1: ASTNode): R;
    constructor()
    // private listener: ASTListener;
    enterContext(arg0: ASTNode): void;
    enterNode(arg0: ASTListener, arg1: InnerASTNode): void;
    exitNode(arg0: ASTListener, arg1: InnerASTNode): void;
    visit(arg0: R, arg1: ASTNode): R;
    visit(arg0: ASTNode): R;
}