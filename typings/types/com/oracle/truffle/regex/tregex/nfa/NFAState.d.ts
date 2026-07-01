import type { BasicState } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/BasicState.d.ts'
import type { NFAStateTransition } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAStateTransition.d.ts'
import type { LookBehindAssertion } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookBehindAssertion.d.ts'
import type { RegexASTNode } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { JsonArray } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonArray.d.ts'
import type { JsonConvertible } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonObject } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class NFAState extends BasicState<NFAState, NFAStateTransition> implements JsonConvertible {
    constructor(original: NFAState)
    constructor(id: number, stateSet: RegexASTNode[], finishedLookBehinds: LookBehindAssertion[], hasPrefixStates: boolean, mustAdvance: boolean)
    constructor(id: number, stateSet: RegexASTNode[], finishedLookBehinds: LookBehindAssertion[], hasPrefixStates: boolean, mustAdvance: boolean, matchedConditionGroupsMap: EconomicMap<number, number[]>)
    readonly finishedLookBehinds: LookBehindAssertion[];
    readonly matchedConditionGroupsMap: EconomicMap<number, number[]>;
    // private numberOfGuardedAnchoredFinalTransitions: number;
    // private numberOfGuardedUnAnchoredFinalTransitions: number;
    readonly possibleResults: number[];
    // private revTransitionToAnchoredFinalState: number;
    // private revTransitionToUnAnchoredFinalState: number;
    readonly stateSet: RegexASTNode[];
    // private transitionToAnchoredFinalState: number;
    // private transitionToUnAnchoredFinalState: number;
    addLoopBackNext(transition: NFAStateTransition): void;
    addPossibleResult(index: number): void;
    createTraceFinderCopy(copyID: number): NFAState;
    createTransitionsArray(length: number): NFAStateTransition[];
    equals(o: Object | null): boolean;
    getAnchoredFinalTransitionConstraints(): number[][];
    getFinishedLookBehinds(): LookBehindAssertion[];
    getFirstTransitionToFinalState(forward: boolean): NFAStateTransition;
    getFirstTransitionToFinalStateIndex(forward: boolean): number;
    getMatchedConditionGroups(t: RegexASTNode): number[];
    getMatchedConditionGroupsDebug(): number[];
    getMatchedConditionGroupsMap(): EconomicMap<number, number[]>;
    getPossibleResults(): number[];
    getStateSet(): RegexASTNode[];
    getTransitionToAnchoredFinalState(forward: boolean): NFAStateTransition;
    getTransitionToAnchoredFinalStateId(forward: boolean): number;
    getTransitionToUnAnchoredFinalState(forward: boolean): NFAStateTransition;
    getTransitionToUnAnchoredFinalStateId(forward: boolean): number;
    getUnAnchoredFinalTransitionConstraints(): number[][];
    hasGuardedTransitionToAnchoredFinalState(): boolean;
    hasGuardedTransitionToUnAnchoredFinalState(): boolean;
    hasPossibleResults(): boolean;
    hasPrefixStates(): boolean;
    hasUnGuardedTransitionToAnchoredFinalState(forward: boolean): boolean;
    hasUnGuardedTransitionToFinalState(forward: boolean): boolean;
    hasUnGuardedTransitionToUnAnchoredFinalState(forward: boolean): boolean;
    hashCode(): number;
    idToString(): string;
    isMustAdvance(): boolean;
    linkPredecessors(): void;
    removeLoopBackNext(): void;
    removeSuccessor(state: NFAState): void;
    setHasPrefixStates(value: boolean): void;
    setMustAdvance(value: boolean): void;
    setSuccessors(successors: NFAStateTransition[]): void;
    setSuccessors(transitions: NFAStateTransition[], createReverseTransitions: boolean): void;
    // private sourceSectionsToJson(): JsonArray;
    toJson(): JsonObject;
    toJson(forward: boolean): JsonObject;
    toString(): string;
    // private updateFinalStateTransitions(transition: NFAStateTransition, i: number): void;
}