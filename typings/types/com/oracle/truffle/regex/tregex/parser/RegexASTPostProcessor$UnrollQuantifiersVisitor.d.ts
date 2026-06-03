import type { RegexASTPostProcessor$UnrollQuantifiersVisitor$QuantifierExpander } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexASTPostProcessor$UnrollQuantifiersVisitor$QuantifierExpander.d.ts'
import type { RegexASTPostProcessor$UnrollQuantifiersVisitor$ShouldUnrollQuantifierVisitor } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexASTPostProcessor$UnrollQuantifiersVisitor$ShouldUnrollQuantifierVisitor.d.ts'
import type { AtomicGroup } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/AtomicGroup.d.ts'
import type { BackReference } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/BackReference.d.ts'
import type { CharacterClass } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/CharacterClass.d.ts'
import type { Group } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Group.d.ts'
import type { LookAheadAssertion } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookAheadAssertion.d.ts'
import type { LookBehindAssertion } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookBehindAssertion.d.ts'
import type { PositionAssertion } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/PositionAssertion.d.ts'
import type { QuantifiableTerm } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/QuantifiableTerm.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { Sequence } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Sequence.d.ts'
import type { SubexpressionCall } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/SubexpressionCall.d.ts'
import type { DepthFirstTraversalRegexASTVisitor } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/DepthFirstTraversalRegexASTVisitor.d.ts'
export class RegexASTPostProcessor$UnrollQuantifiersVisitor extends DepthFirstTraversalRegexASTVisitor {
    static unrollQuantifiers(paramast: RegexAST): void;
    private constructor(ast: RegexAST)
    // private ast: RegexAST;
    // private quantifierExpander: RegexASTPostProcessor$UnrollQuantifiersVisitor$QuantifierExpander;
    // private shouldUnrollVisitor: RegexASTPostProcessor$UnrollQuantifiersVisitor$ShouldUnrollQuantifierVisitor;
    leave(atomicGroup: AtomicGroup): void;
    leave(group: Group): void;
    leave(assertion: LookAheadAssertion): void;
    leave(assertion: LookBehindAssertion): void;
    leave(sequence: Sequence): void;
    // private shouldUnroll(term: QuantifiableTerm): boolean;
    visit(atomicGroup: AtomicGroup): void;
    visit(backReference: BackReference): void;
    visit(characterClass: CharacterClass): void;
    visit(group: Group): void;
    visit(assertion: LookAheadAssertion): void;
    visit(assertion: LookBehindAssertion): void;
    visit(assertion: PositionAssertion): void;
    visit(sequence: Sequence): void;
    visit(subexpressionCall: SubexpressionCall): void;
}