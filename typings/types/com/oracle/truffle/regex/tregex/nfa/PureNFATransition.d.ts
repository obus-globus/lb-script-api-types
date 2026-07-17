import type { AbstractTransition } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/AbstractTransition.d.ts'
import type { PureNFAState } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/PureNFAState.d.ts'
import type { GroupBoundaries } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/GroupBoundaries.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { JsonValue } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PureNFATransition extends Object implements AbstractTransition<PureNFAState, PureNFATransition> {
    static hasCaretGuard(paramflags: number): boolean;
    static hasDollarGuard(paramflags: number): boolean;
    static hasMatchBeginGuard(paramflags: number): boolean;
    static hasMatchEndGuard(paramflags: number): boolean;
    constructor(id: number, source: PureNFAState, target: PureNFAState, groupBoundaries: GroupBoundaries, caretGuard: boolean, dollarGuard: boolean, matchBeginGuard: boolean, matchEndGuard: boolean, guards: number[])
    readonly flags: number;
    readonly groupBoundaries: GroupBoundaries;
    readonly guards: number[];
    readonly id: number;
    readonly source: PureNFAState;
    readonly target: PureNFAState;
    getFlags(): number;
    getGroupBoundaries(): GroupBoundaries;
    getGuards(): number[];
    getId(): number;
    getSource(): PureNFAState;
    getTarget(forward: boolean): PureNFAState;
    getTarget(): PureNFAState;
    hasCaretGuard(): boolean;
    hasDollarGuard(): boolean;
    hasMatchBeginGuard(): boolean;
    hasMatchEndGuard(): boolean;
    toJson(ast: RegexAST): JsonValue;
}