import type { StateIndex } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/StateIndex.d.ts'
import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { PureNFAState } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/PureNFAState.d.ts'
import type { PureNFATransition } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/PureNFATransition.d.ts'
import type { Counter$ThresholdCounter } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Counter$ThresholdCounter.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { RegexASTSubtreeRootNode } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTSubtreeRootNode.d.ts'
import type { JsonValue } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PureNFA extends Object implements StateIndex<PureNFAState> {
    constructor(astSubRoot: RegexASTSubtreeRootNode, states: PureNFAState[], stateIDCounter: Counter$ThresholdCounter, transitionIDCounter: Counter$ThresholdCounter)
    readonly fixedWidth: number;
    readonly globalSubTreeId: number;
    readonly states: PureNFAState[];
    readonly subTreeId: number;
    readonly subtrees: PureNFA[];
    readonly transitions: PureNFATransition[];
    getASTSubtree(ast: RegexAST): RegexASTSubtreeRootNode;
    getAnchoredEntry(): PureNFATransition;
    getAnchoredInitialState(): PureNFAState;
    getDummyInitialState(): PureNFAState;
    getFixedWidth(): number;
    getGlobalSubTreeId(): number;
    getId(state: PureNFAState): number;
    getMergedInitialStateCharSet(ast: RegexAST, compilationBuffer: CompilationBuffer): (Object | null)[];
    getNumberOfStates(): number;
    getNumberOfTransitions(): number;
    getState(id: number): PureNFAState;
    getStates(): PureNFAState[];
    getSubTreeId(): number;
    getSubtrees(): PureNFA[];
    getTransitions(): PureNFATransition[];
    getUnAnchoredEntry(): PureNFATransition;
    getUnAnchoredInitialState(): PureNFAState;
    isEmpty(): boolean;
    isFixedWidth(): boolean;
    isRoot(): boolean;
    materializeGroupBoundaries(): void;
    toJson(ast: RegexAST): JsonValue;
}