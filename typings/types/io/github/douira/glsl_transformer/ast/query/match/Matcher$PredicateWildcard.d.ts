import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Matcher$NodeWildcard } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/match/Matcher$NodeWildcard.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
export class Matcher$PredicateWildcard extends Matcher$NodeWildcard {
    constructor(arg0: string, arg1: (param0: ASTNode) => kotlin.Boolean)
    // private predicate: (param0: ASTNode) => kotlin.Boolean;
    test(arg0: ASTNode): boolean;
}