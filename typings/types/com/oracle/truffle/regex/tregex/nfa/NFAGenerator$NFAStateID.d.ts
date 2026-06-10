import type { NFAState } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAState.d.ts'
import type { RegexASTNode } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class NFAGenerator$NFAStateID extends Object {
    static create(paramstate: NFAState): NFAGenerator$NFAStateID;
    constructor(stateSet: RegexASTNode[], mustAdvance: boolean, matchedConditionGroupsMap: EconomicMap<number, number[]>)
    // private matchedConditionGroupsMap: EconomicMap<number, number[]>;
    // private mustAdvance: boolean;
    // private stateSet: RegexASTNode[];
    equals(o: Object | null): boolean;
    hashCode(): number;
}