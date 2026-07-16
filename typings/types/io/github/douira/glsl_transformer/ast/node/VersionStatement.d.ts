import type { Profile } from '../../../../../../io/github/douira/glsl_transformer/ast/node/Profile.d.ts'
import type { Version } from '../../../../../../io/github/douira/glsl_transformer/ast/node/Version.d.ts'
import type { ASTNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Root } from '../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTVisitor } from '../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class VersionStatement extends ASTNode {
    static clone<N extends ASTNode>(paramarg0: N): N;
    static clone<N extends ASTNode>(paramarg0: N[]): Stream<N>;
    static getDefault(): VersionStatement;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: Version, arg1: Profile)
    profile: Profile;
    version: Version;
    accept<R extends unknown>(arg0: ASTVisitor<R>): R;
    clone(): VersionStatement;
    cloneInto(arg0: Root): VersionStatement;
    getNormalizedProfile(): Profile;
}