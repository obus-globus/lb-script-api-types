import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Matcher$NodeWildcard } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/match/Matcher$NodeWildcard.d.ts'
export class Matcher$AnyWildcard extends Matcher$NodeWildcard {
    constructor(arg0: string)
    test(arg0: ASTNode): boolean;
}