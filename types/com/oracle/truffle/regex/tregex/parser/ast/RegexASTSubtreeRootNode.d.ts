import type { CompilationBuffer } from '../../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { Group } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Group.d.ts'
import type { MatchFound } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/MatchFound.d.ts'
import type { PositionAssertion } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/PositionAssertion.d.ts'
import type { RegexAST } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { RegexASTNode } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { Term } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Term.d.ts'
import type { RegexASTVisitorIterable } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/RegexASTVisitorIterable.d.ts'
import type { JsonObject } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class RegexASTSubtreeRootNode extends Term implements RegexASTVisitorIterable {
    constructor()
    constructor(copy: RegexASTSubtreeRootNode, ast: RegexAST)
    constructor(copy: RegexASTSubtreeRootNode, ast: RegexAST, compilationBuffer: CompilationBuffer)
    readonly anchoredFinalState: PositionAssertion;
    readonly anchoredInitialState: PositionAssertion;
    readonly globalSubTreeId: number;
    readonly group: Group;
    readonly matchFound: MatchFound;
    readonly subTreeId: number;
    readonly subtrees: (Object | null)[];
    readonly unAnchoredInitialState: MatchFound;
    // private visitorGroupVisited: boolean;
    copy(ast: RegexAST): RegexASTSubtreeRootNode;
    getAnchoredFinalState(): Term;
    getAnchoredInitialState(): Term;
    getGlobalSubTreeId(): number;
    getGroup(): Group;
    getMatchFound(): MatchFound;
    getPrefix(): string;
    getSubTreeId(): number;
    getSubtrees(): (Object | null)[];
    getUnAnchoredInitialState(): Term;
    globalSubTreeIdInitialized(): boolean;
    isFixedWidth(): boolean;
    markAsDead(): void;
    resetVisitorIterator(): void;
    setAnchoredFinalState(anchoredFinalState: PositionAssertion): void;
    setAnchoredInitialState(anchoredInitialState: PositionAssertion): void;
    setGlobalSubTreeId(globalSubTreeId: number): void;
    setGroup(group: Group): void;
    setMatchFound(matchFound: MatchFound): void;
    setSubTreeId(subTreeId: number): void;
    setUnAnchoredInitialState(unAnchoredInitialState: MatchFound): void;
    subTreeIdInitialized(): boolean;
    toJson(typeName: string): JsonObject;
    toString(): string;
    visitorGetNext(reverse: boolean): RegexASTNode;
    visitorHasNext(): boolean;
}