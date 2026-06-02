import type { LookBehindAssertion } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookBehindAssertion.d.ts'
import type { RegexASTNode } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ASTStepVisitor$ASTStepCacheKey extends Object {
    constructor(root: RegexASTNode, canTraverseCaret: boolean, traversableLookBehindAssertions: LookBehindAssertion[], matchedConditionGroups: number[])
    // private canTraverseCaret: boolean;
    // private matchedConditionGroups: number[];
    // private root: RegexASTNode;
    // private traversableLookBehindAssertions: LookBehindAssertion[];
    equals(obj: Object | null): boolean;
    hashCode(): number;
}