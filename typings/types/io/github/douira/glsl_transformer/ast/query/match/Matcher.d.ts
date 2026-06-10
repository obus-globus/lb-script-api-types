import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Matcher$NodeWildcard } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/match/Matcher$NodeWildcard.d.ts'
import type { ASTVisitor } from '../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { ParseShape } from '../../../../../../../io/github/douira/glsl_transformer/parser/ParseShape.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Matcher<N extends ASTNode> extends Object {
    constructor(arg0: N)
    constructor(arg0: N, arg1: string)
    constructor(arg0: string, arg1: ParseShape<Object, N>)
    constructor(arg0: string, arg1: ParseShape<Object, N>, arg2: string)
    // private activeListWildcard: Matcher$NodeWildcard;
    // private collectMatches: boolean;
    readonly dataMatches: { [key: string]: Object };
    // private matchIndex: number;
    // private matchVisitor: ASTVisitor<Object>;
    // private matches: boolean;
    readonly nodeMatches: { [key: string]: ASTNode };
    // private nodeWildcards: Map<ASTNode, Matcher$NodeWildcard>;
    // private pattern: N;
    // private patternItems: Object[];
    // private patternItemsSize: number;
    // private wildcardPrefix: string;
    // private ensureMatchMaps(): void;
    // private ensureWildcardMap(): void;
    getDataMatch(arg0: string): Object;
    getDataMatches(): { [key: string]: Object };
    getNodeMatch(arg0: string): ASTNode;
    getNodeMatch<NN extends ASTNode>(arg0: string, arg1: Class<NN>): NN;
    getNodeMatches(): { [key: string]: ASTNode };
    getPatternClass(): Class<N>;
    getStringDataMatch(arg0: string): string;
    markAnyWildcard(arg0: string, arg1: ASTNode): void;
    markClassWildcard(arg0: string, arg1: ASTNode): void;
    markClassWildcard(arg0: string, arg1: ASTNode, arg2: Class<ASTNode>): void;
    markClassedPredicateWildcard<NN extends ASTNode>(arg0: string, arg1: ASTNode, arg2: Class<NN>, arg3: (param0: NN) => boolean): void;
    markPredicatedWildcard(arg0: string, arg1: ASTNode, arg2: (param0: ASTNode) => boolean): void;
    // private markWildcard(arg0: ASTNode, arg1: Matcher$NodeWildcard): void;
    matches(arg0: N): boolean;
    matchesExtract(arg0: N): boolean;
    matchesExtract(arg0: N, arg1: { [key: string]: Object }, arg2: { [key: string]: ASTNode }): boolean;
    preparePatternItems(): void;
}