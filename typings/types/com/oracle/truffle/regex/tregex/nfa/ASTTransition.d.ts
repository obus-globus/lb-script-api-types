import type { RegexLanguage } from '../../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { AbstractTransition } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/AbstractTransition.d.ts'
import type { GroupBoundaries } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/GroupBoundaries.d.ts'
import type { Term } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Term.d.ts'
import type { JsonConvertible } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonValue } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ASTTransition extends Object implements AbstractTransition<Term, ASTTransition>, JsonConvertible {
    constructor(language: RegexLanguage, target: Term, constraints: number[], operations: number[])
    constructor(language: RegexLanguage, constraints: number[], operations: number[])
    readonly constraints: number[];
    readonly groupBoundaries: GroupBoundaries;
    readonly matchedConditionGroups: number[];
    readonly operations: number[];
    readonly target: Term;
    equals(obj: Object | null): boolean;
    getConstraints(): number[];
    getGroupBoundaries(): GroupBoundaries;
    getId(): number;
    getMatchedConditionGroups(): number[];
    getOperations(): number[];
    getSource(): Term;
    getTarget(forward: boolean): Term;
    getTarget(): Term;
    hashCode(): number;
    setGroupBoundaries(groupBoundaries: GroupBoundaries): void;
    setMatchedConditionGroups(matchedConditionGroups: number[]): void;
    setTarget(target: Term): void;
    toJson(): JsonValue;
}