import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { ExternalDeclaration } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/ExternalDeclaration.d.ts'
import type { ExternalDeclaration$ExternalDeclarationType } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/ExternalDeclaration$ExternalDeclarationType.d.ts'
import type { Root } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class IncludeDirective extends ExternalDeclaration {
    static clone(paramarg0: Object | null): Object | null;
    static clone(paramarg0: (Object | null)[]): Stream<Object>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: string)
    constructor(arg0: string, arg1: boolean)
    readonly content: string;
    isAngleBrackets: boolean;
    clone(): IncludeDirective;
    cloneInto(arg0: Root): IncludeDirective;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    externalDeclarationAccept<R extends Object | number | string | boolean>(arg0: ASTVisitor<R>): R;
    getContent(): string;
    getExternalDeclarationType(): ExternalDeclaration$ExternalDeclarationType;
    setContent(arg0: string): void;
}