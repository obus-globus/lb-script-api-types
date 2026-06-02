import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { HintedMatcher } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/match/HintedMatcher.d.ts'
import type { ParseShape } from '../../../../../../../io/github/douira/glsl_transformer/parser/ParseShape.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class AutoHintedMatcher<N extends ASTNode> extends HintedMatcher<N> {
    constructor(arg0: N)
    constructor(arg0: N, arg1: string)
    constructor(arg0: string, arg1: ParseShape<Object, N>)
    constructor(arg0: string, arg1: ParseShape<Object, N>, arg2: string)
    // private determineHint(): void;
    getHint(): string;
}