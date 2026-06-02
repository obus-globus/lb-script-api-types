import type { ASTNode } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Statement } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/statement/Statement.d.ts'
import type { CaseLabelStatement$CaseLabelType } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/statement/terminal/CaseLabelStatement$CaseLabelType.d.ts'
import type { Root } from '../../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export abstract class CaseLabelStatement extends Statement {
    static clone(paramarg0: Object | null): Object | null;
    static clone(paramarg0: (Object | null)[]): Stream<Object>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor()
    accept<R extends Object | number | string | boolean>(arg0: ASTVisitor<R>): R;
    clone(): CaseLabelStatement;
    cloneInto(arg0: Root): CaseLabelStatement;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    getCaseLabelType(): CaseLabelStatement$CaseLabelType;
}