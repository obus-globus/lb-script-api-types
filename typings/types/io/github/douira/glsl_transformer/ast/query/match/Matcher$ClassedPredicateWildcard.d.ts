import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Matcher$NodeWildcard } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/match/Matcher$NodeWildcard.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
export class Matcher$ClassedPredicateWildcard<N extends ASTNode> extends Matcher$NodeWildcard {
    constructor(arg0: string, arg1: Class<N>, arg2: (param0: N) => boolean)
    // private predicate: (param0: N) => boolean;
    // private type: Class<N>;
    test(arg0: ASTNode): boolean;
}