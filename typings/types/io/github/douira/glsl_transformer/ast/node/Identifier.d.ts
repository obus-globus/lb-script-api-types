import type { ASTNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Root } from '../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTVisitor } from '../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Token } from '../../../../../../org/antlr/v4/runtime/Token.d.ts'
export class Identifier extends ASTNode {
    static clone(paramarg0: ASTNode | null): ASTNode | null;
    static clone(paramarg0: (ASTNode | null)[]): Stream<ASTNode>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    static validateContents(paramarg0: string): void;
    constructor(arg0: string)
    constructor(arg0: Token)
    readonly name: string;
    _setNameInternal(arg0: string): void;
    accept<R extends unknown>(arg0: ASTVisitor<R>): R;
    clone(): Identifier;
    cloneInto(arg0: Root): Identifier;
    getName(): string;
    setName(arg0: string): void;
}