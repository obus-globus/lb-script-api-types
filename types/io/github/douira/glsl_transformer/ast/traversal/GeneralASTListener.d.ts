import type { ASTNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { InnerASTNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/InnerASTNode.d.ts'
import type { ContextTracker } from '../../../../../../io/github/douira/glsl_transformer/ast/traversal/ContextTracker.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface GeneralASTListener extends ContextTracker, Object{
    afterEnterEveryNode(arg0: InnerASTNode): void;
    beforeExitEveryNode(arg0: InnerASTNode): void;
    enterContext(arg0: ASTNode): void;
    enterEveryNode(arg0: InnerASTNode): void;
    exitEveryNode(arg0: InnerASTNode): void;
}