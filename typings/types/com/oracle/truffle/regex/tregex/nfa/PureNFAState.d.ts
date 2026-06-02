import type { BasicState } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/BasicState.d.ts'
import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { PureNFATransition } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/PureNFATransition.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { Term } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Term.d.ts'
import type { JsonObject } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PureNFAState extends BasicState<PureNFAState, PureNFATransition> {
    static KIND_BACK_REFERENCE: number;
    static KIND_CHARACTER_CLASS: number;
    static KIND_EMPTY_MATCH: number;
    static KIND_INITIAL_OR_FINAL_STATE: number;
    static KIND_SUB_MATCHER: number;
    constructor(id: number, t: Term)
    // private astNodeId: number;
    readonly charSet: (Object | null)[];
    readonly kind: number;
    // private referencedGroupNumbers: number[];
    readonly subtreeId: number;
    addLoopBackNext(transition: PureNFATransition): void;
    // private calcIsDeterministic(compilationBuffer: CompilationBuffer): boolean;
    canMatchZeroWidth(): boolean;
    createTransitionsArray(length: number): PureNFATransition[];
    getAstNode(ast: RegexAST): Term;
    // private getAstNodeId(): number;
    getBackRefNumbers(): number[];
    getCharSet(): (Object | null)[];
    getKind(): number;
    getSubtreeId(): number;
    hasUnGuardedTransitionToUnAnchoredFinalState(forward: boolean): boolean;
    initIsDeterministic(compilationBuffer: CompilationBuffer): void;
    isAtomicGroup(): boolean;
    isBackReference(): boolean;
    isCharacterClass(): boolean;
    isDeterministic(): boolean;
    isEmptyMatch(): boolean;
    isIgnoreCaseReference(): boolean;
    isIgnoreCaseReferenceAlternativeMode(): boolean;
    isLookAhead(ast: RegexAST): boolean;
    isLookAround(): boolean;
    isLookBehind(ast: RegexAST): boolean;
    isRecursiveReference(): boolean;
    isSubMatcher(): boolean;
    isSubMatcherNegated(): boolean;
    removeLoopBackNext(): void;
    setDeterministic(value: boolean): void;
    setIgnoreCaseReference(value: boolean): void;
    setIgnoreCaseReferenceAlternativeMode(value: boolean): void;
    setLookAround(value: boolean): void;
    setRecursiveReference(value: boolean): void;
    setSubMatcherNegated(value: boolean): void;
    toJson(ast: RegexAST): JsonObject;
    toString(): string;
    // private toStringIntl(): string;
}