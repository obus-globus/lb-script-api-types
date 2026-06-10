import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { ExternalDeclaration } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/ExternalDeclaration.d.ts'
import type { ExternalDeclaration$ExternalDeclarationType } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/ExternalDeclaration$ExternalDeclarationType.d.ts'
import type { LayoutDefaults$LayoutMode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/LayoutDefaults$LayoutMode.d.ts'
import type { LayoutQualifier } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/LayoutQualifier.d.ts'
import type { Root } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class LayoutDefaults extends ExternalDeclaration {
    static clone(paramarg0: ASTNode | null): ASTNode | null;
    static clone(paramarg0: (ASTNode | null)[]): Stream<ASTNode>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: LayoutQualifier, arg1: LayoutDefaults$LayoutMode)
    mode: LayoutDefaults$LayoutMode;
    qualifier: LayoutQualifier;
    clone(): LayoutDefaults;
    cloneInto(arg0: Root): LayoutDefaults;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    externalDeclarationAccept<R extends Object | number | string | boolean>(arg0: ASTVisitor<R>): R;
    getExternalDeclarationType(): ExternalDeclaration$ExternalDeclarationType;
    getQualifier(): LayoutQualifier;
    setQualifier(arg0: LayoutQualifier): void;
}