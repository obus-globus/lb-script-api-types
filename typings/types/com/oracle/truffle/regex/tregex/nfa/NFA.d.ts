import type { PreCalculatedResultFactory } from '../../../../../../com/oracle/truffle/regex/result/PreCalculatedResultFactory.d.ts'
import type { StateIndex } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/StateIndex.d.ts'
import type { NFAState } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAState.d.ts'
import type { NFAStateTransition } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAStateTransition.d.ts'
import type { Counter$ThresholdCounter } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Counter$ThresholdCounter.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { JsonConvertible } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonValue } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NFA extends Object implements StateIndex<NFAState>, JsonConvertible {
    constructor(original: NFA)
    constructor(ast: RegexAST, dummyInitialState: NFAState, anchoredEntry: NFAStateTransition[], unAnchoredEntry: NFAStateTransition[], reverseAnchoredEntry: NFAStateTransition, reverseUnAnchoredEntry: NFAStateTransition, states: NFAState[], stateIDCounter: Counter$ThresholdCounter, transitionIDCounter: Counter$ThresholdCounter, initialLoopBack: NFAStateTransition, preCalculatedResults: PreCalculatedResultFactory[])
    readonly anchoredEntry: NFAStateTransition[];
    readonly ast: RegexAST;
    readonly dummyInitialState: NFAState;
    readonly initialLoopBack: NFAStateTransition;
    readonly preCalculatedResults: PreCalculatedResultFactory[];
    readonly reverseAnchoredEntry: NFAStateTransition;
    readonly reverseUnAnchoredEntry: NFAStateTransition;
    readonly states: NFAState[];
    readonly transitions: NFAStateTransition[];
    readonly unAnchoredEntry: NFAStateTransition[];
    getAnchoredEntry(): NFAStateTransition[];
    getAnchoredEntryOffset(state: NFAState, forward: boolean): number;
    getAnchoredInitialState(): NFAState;
    getAst(): RegexAST;
    getDummyInitialState(): NFAState;
    getId(state: NFAState): number;
    getInitialLoopBackTransition(): NFAStateTransition;
    getMaxOffsetAnchoredInitialState(): NFAState;
    getMaxOffsetUnAnchoredInitialState(): NFAState;
    getNumberOfStates(): number;
    getNumberOfTransitions(): number;
    getPreCalculatedResults(): PreCalculatedResultFactory[];
    getReverseAnchoredEntry(): NFAStateTransition;
    getReverseUnAnchoredEntry(): NFAStateTransition;
    getState(id: number): NFAState;
    getStates(): NFAState[];
    getTransitions(): NFAStateTransition[];
    getUnAnchoredEntry(): NFAStateTransition[];
    getUnAnchoredEntryOffset(state: NFAState, forward: boolean): number;
    getUnAnchoredInitialState(): NFAState;
    hasReverseUnAnchoredEntry(): boolean;
    isAnchoredEntry(state: NFAState, forward: boolean): boolean;
    isDead(): boolean;
    isEmpty(): boolean;
    isEntry(state: NFAState, forward: boolean): boolean;
    isFixedCodePointWidth(): boolean;
    isTraceFinderNFA(): boolean;
    isUnAnchoredEntry(state: NFAState, forward: boolean): boolean;
    setInitialLoopBack(enable: boolean): void;
    toJson(): JsonValue;
    toJson(forward: boolean): JsonValue;
}