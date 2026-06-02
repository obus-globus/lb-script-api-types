import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Matcher$NodeWildcard } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/match/Matcher$NodeWildcard.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
export class Matcher$ClassWildcard extends Matcher$NodeWildcard {
    constructor(arg0: string, arg1: Class<ASTNode>)
    // private type: Class<ASTNode>;
    test(arg0: ASTNode): boolean;
}