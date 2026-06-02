import type { ASTStep } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/ASTStep.d.ts'
import type { ASTStepVisitor$ASTStepCacheKey } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/ASTStepVisitor$ASTStepCacheKey.d.ts'
import type { NFAState } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAState.d.ts'
import type { LookAheadAssertion } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookAheadAssertion.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { RegexASTNode } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { NFATraversalRegexASTVisitor } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/NFATraversalRegexASTVisitor.d.ts'
import type { EconomicMap } from '../../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class ASTStepVisitor extends NFATraversalRegexASTVisitor {
    constructor(ast: RegexAST)
    // private constraintsBuilder: number[];
    // private curLookAheads: ASTStep[];
    // private curLookBehinds: ASTStep[];
    // private lookAheadMap: EconomicMap<ASTStepVisitor$ASTStepCacheKey, ASTStep>;
    // private lookAroundExpansionQueue: ASTStep[];
    // private operationsBuilder: number[];
    // private stepCur: ASTStep;
    canPruneAfterUnconditionalFinalState(): boolean;
    enterLookAhead(assertion: LookAheadAssertion): void;
    isBuildingDFA(): boolean;
    leaveLookAhead(assertion: LookAheadAssertion): void;
    step(expandState: NFAState): ASTStep;
    visit(target: RegexASTNode): void;
}