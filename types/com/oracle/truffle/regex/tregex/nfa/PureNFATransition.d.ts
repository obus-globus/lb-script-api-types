import type { AbstractState } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/AbstractState.d.ts'
import type { AbstractTransition } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/AbstractTransition.d.ts'
import type { PureNFAState } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/PureNFAState.d.ts'
import type { GroupBoundaries } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/GroupBoundaries.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { JsonValue } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PureNFATransition extends Object implements AbstractTransition<PureNFAState, PureNFATransition> {
    constructor(id: number, source: PureNFAState, target: PureNFAState, groupBoundaries: GroupBoundaries, caretGuard: boolean, dollarGuard: boolean, matchBeginGuard: boolean, matchEndGuard: boolean, guards: number[])
    // private caretGuard: boolean;
    // private dollarGuard: boolean;
    readonly groupBoundaries: GroupBoundaries;
    readonly guards: number[];
    readonly id: number;
    // private matchBeginGuard: boolean;
    // private matchEndGuard: boolean;
    readonly source: PureNFAState;
    readonly target: PureNFAState;
    getGroupBoundaries(): GroupBoundaries;
    getGuards(): number[];
    getId(): number;
    getSource(): PureNFAState;
    getTarget<S extends AbstractState<S, T>>(forward: boolean): S;
    getTarget(): PureNFAState;
    hasCaretGuard(): boolean;
    hasDollarGuard(): boolean;
    hasMatchBeginGuard(): boolean;
    hasMatchEndGuard(): boolean;
    toJson(ast: RegexAST): JsonValue;
}