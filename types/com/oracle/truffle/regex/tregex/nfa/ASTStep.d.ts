import type { ASTSuccessor } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/ASTSuccessor.d.ts'
import type { RegexASTNode } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { JsonConvertible } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonValue } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ASTStep extends Object implements JsonConvertible {
    constructor(root: RegexASTNode, matchedConditionGroups: number[])
    readonly matchedConditionGroups: number[];
    readonly root: RegexASTNode;
    readonly successors: ASTSuccessor[];
    addSuccessor(successor: ASTSuccessor): void;
    getMatchedConditionGroups(): number[];
    getRoot(): RegexASTNode;
    getSuccessors(): ASTSuccessor[];
    toJson(): JsonValue;
}