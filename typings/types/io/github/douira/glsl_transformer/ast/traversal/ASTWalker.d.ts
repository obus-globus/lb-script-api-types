import type { ASTNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { InnerASTNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/InnerASTNode.d.ts'
import type { ASTBaseVisitor } from '../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTBaseVisitor.d.ts'
import type { ASTListener } from '../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ASTWalker<R extends Object | number | string | boolean> extends ASTBaseVisitor<R> {
    static walk(paramarg0: ASTListener, paramarg1: ASTNode): Object | null;
    constructor()
    private constructor(arg0: ASTListener)
    // private listener: ASTListener;
    enterContext(arg0: ASTNode): void;
    enterNode(arg0: ASTListener, arg1: InnerASTNode): void;
    exitNode(arg0: ASTListener, arg1: InnerASTNode): void;
    visit(arg0: R, arg1: ASTNode): R;
    visit(arg0: ASTNode): R;
}