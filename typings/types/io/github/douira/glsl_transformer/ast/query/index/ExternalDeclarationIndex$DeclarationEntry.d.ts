import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { ExternalDeclaration } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/ExternalDeclaration.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ExternalDeclarationIndex$DeclarationEntry extends Record {
    constructor(declaration: ExternalDeclaration, keyMember: ASTNode)
    // private declaration: ExternalDeclaration;
    // private keyMember: ASTNode;
    declaration(): ExternalDeclaration;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    keyMember(): ASTNode;
    toString(): string;
}