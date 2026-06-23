import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Matcher } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/match/Matcher.d.ts'
import type { ParseShape } from '../../../../../../../io/github/douira/glsl_transformer/parser/ParseShape.d.ts'
export class HintedMatcher<N extends ASTNode> extends Matcher<N> {
    constructor(arg0: N, arg1: string)
    constructor(arg0: N, arg1: string, arg2: string)
    constructor(arg0: string, arg1: ParseShape<any, N>, arg2: string)
    constructor(arg0: string, arg1: ParseShape<any, N>, arg2: string, arg3: string)
    hint: string;
    getHint(): string;
}