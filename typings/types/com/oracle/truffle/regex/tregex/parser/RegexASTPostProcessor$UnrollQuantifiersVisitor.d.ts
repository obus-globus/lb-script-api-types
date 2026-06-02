import type { RegexASTPostProcessor$UnrollQuantifiersVisitor$QuantifierExpander } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexASTPostProcessor$UnrollQuantifiersVisitor$QuantifierExpander.d.ts'
import type { RegexASTPostProcessor$UnrollQuantifiersVisitor$ShouldUnrollQuantifierVisitor } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexASTPostProcessor$UnrollQuantifiersVisitor$ShouldUnrollQuantifierVisitor.d.ts'
import type { BackReference } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/BackReference.d.ts'
import type { CharacterClass } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/CharacterClass.d.ts'
import type { Group } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Group.d.ts'
import type { QuantifiableTerm } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/QuantifiableTerm.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { SubexpressionCall } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/SubexpressionCall.d.ts'
import type { DepthFirstTraversalRegexASTVisitor } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/DepthFirstTraversalRegexASTVisitor.d.ts'
export class RegexASTPostProcessor$UnrollQuantifiersVisitor extends DepthFirstTraversalRegexASTVisitor {
    static unrollQuantifiers(paramast: RegexAST): void;
    private constructor(ast: RegexAST)
    // private ast: RegexAST;
    // private quantifierExpander: RegexASTPostProcessor$UnrollQuantifiersVisitor$QuantifierExpander;
    // private shouldUnrollVisitor: RegexASTPostProcessor$UnrollQuantifiersVisitor$ShouldUnrollQuantifierVisitor;
    leave(group: Group): void;
    // private shouldUnroll(term: QuantifiableTerm): boolean;
    visit(backReference: BackReference): void;
    visit(characterClass: CharacterClass): void;
    visit(subexpressionCall: SubexpressionCall): void;
}