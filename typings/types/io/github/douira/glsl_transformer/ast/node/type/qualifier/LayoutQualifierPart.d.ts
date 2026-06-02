import type { ASTNode } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { InnerASTNode } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/InnerASTNode.d.ts'
import type { LayoutQualifierPart$LayoutQualifierType } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/LayoutQualifierPart$LayoutQualifierType.d.ts'
import type { Root } from '../../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export abstract class LayoutQualifierPart extends InnerASTNode {
    static clone(paramarg0: Object | null): Object | null;
    static clone(paramarg0: (Object | null)[]): Stream<Object>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor()
    accept<R extends Object | number | string | boolean>(arg0: ASTVisitor<R>): R;
    clone(): LayoutQualifierPart;
    cloneInto(arg0: Root): LayoutQualifierPart;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    getLayoutQualifierType(): LayoutQualifierPart$LayoutQualifierType;
    layoutQualifierPartAccept<R extends Object | number | string | boolean>(arg0: ASTVisitor<R>): R;
}