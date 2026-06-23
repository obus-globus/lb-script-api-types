import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { ExternalDeclaration } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/ExternalDeclaration.d.ts'
import type { ExternalDeclaration$ExternalDeclarationType } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/ExternalDeclaration$ExternalDeclarationType.d.ts'
import type { PragmaDirective$PragmaOption } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/PragmaDirective$PragmaOption.d.ts'
import type { PragmaDirective$PragmaState } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/PragmaDirective$PragmaState.d.ts'
import type { PragmaDirective$PragmaType } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/PragmaDirective$PragmaType.d.ts'
import type { Root } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PragmaDirective extends ExternalDeclaration {
    static clone(paramarg0: ASTNode | null): ASTNode | null;
    static clone(paramarg0: (ASTNode | null)[]): Stream<ASTNode>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: boolean, arg1: PragmaDirective$PragmaType, arg2: PragmaDirective$PragmaOption, arg3: PragmaDirective$PragmaState)
    private constructor(arg0: boolean, arg1: PragmaDirective$PragmaType, arg2: PragmaDirective$PragmaOption, arg3: string, arg4: PragmaDirective$PragmaState)
    constructor(arg0: boolean, arg1: PragmaDirective$PragmaType, arg2: PragmaDirective$PragmaState)
    constructor(arg0: boolean, arg1: string)
    readonly customName: string;
    option: PragmaDirective$PragmaOption;
    state: PragmaDirective$PragmaState;
    stdGL: boolean;
    type: PragmaDirective$PragmaType;
    clone(): PragmaDirective;
    cloneInto(arg0: Root): PragmaDirective;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    externalDeclarationAccept<R extends unknown>(arg0: ASTVisitor<R>): R;
    getCustomName(): string;
    getExternalDeclarationType(): ExternalDeclaration$ExternalDeclarationType;
    setCustomName(arg0: string): void;
}