import type { LookAheadAssertion } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookAheadAssertion.d.ts'
import type { RegexAST } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { RegexASTNode } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { NFATraversalRegexASTVisitor } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/NFATraversalRegexASTVisitor.d.ts'
export class MarkLookBehindEntriesVisitor extends NFATraversalRegexASTVisitor {
    constructor(ast: RegexAST)
    // private curEntriesFound: S[];
    // private curLookAheadBoundariesHit: S[];
    // private newEntriesFound: S[];
    // private newLookAheadBoundariesHit: S[];
    canPruneAfterUnconditionalFinalState(): boolean;
    enterLookAhead(assertion: LookAheadAssertion): void;
    isBuildingDFA(): boolean;
    leaveLookAhead(assertion: LookAheadAssertion): void;
    // private movePastLookAheadBoundaries(): void;
    run(): void;
    visit(target: RegexASTNode): void;
}