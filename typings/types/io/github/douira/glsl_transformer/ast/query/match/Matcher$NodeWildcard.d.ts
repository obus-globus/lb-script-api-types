import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class Matcher$NodeWildcard extends Object implements Predicate<ASTNode> {
    static isEqual<T extends unknown>(paramarg0: Object): (param0: T) => boolean;
    static not<T extends unknown>(paramarg0: (param0: Object) => boolean): (param0: T) => boolean;
    constructor(arg0: string)
    // private name: string;
    and(arg0: (param0: ASTNode) => boolean): (param0: ASTNode) => boolean;
    negate(): (param0: ASTNode) => boolean;
    or(arg0: (param0: ASTNode) => boolean): (param0: ASTNode) => boolean;
}