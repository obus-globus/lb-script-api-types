import type { PureNFAGenerator } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/PureNFAGenerator.d.ts'
import type { PureNFAState } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/PureNFAState.d.ts'
import type { PureNFATransition } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/PureNFATransition.d.ts'
import type { LookAheadAssertion } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookAheadAssertion.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { RegexASTNode } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { NFATraversalRegexASTVisitor } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/NFATraversalRegexASTVisitor.d.ts'
export class PureNFATransitionGenerator extends NFATraversalRegexASTVisitor {
    constructor(ast: RegexAST, nfaGen: PureNFAGenerator)
    // private curState: PureNFAState;
    // private nfaGen: PureNFAGenerator;
    // private transitionBuffer: PureNFATransition[];
    canPruneAfterUnconditionalFinalState(): boolean;
    enterLookAhead(assertion: LookAheadAssertion): void;
    generateTransitions(state: PureNFAState): void;
    isBuildingDFA(): boolean;
    leaveLookAhead(assertion: LookAheadAssertion): void;
    // private pruneLookarounds(target: RegexASTNode): boolean;
    visit(target: RegexASTNode): void;
}