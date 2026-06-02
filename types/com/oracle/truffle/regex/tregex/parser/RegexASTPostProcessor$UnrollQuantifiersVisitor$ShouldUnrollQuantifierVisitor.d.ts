import type { BackReference } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/BackReference.d.ts'
import type { Group } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Group.d.ts'
import type { NodeCountVisitor } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/NodeCountVisitor.d.ts'
export class RegexASTPostProcessor$UnrollQuantifiersVisitor$ShouldUnrollQuantifierVisitor extends NodeCountVisitor {
    private constructor()
    // private containsBackReference: boolean;
    shouldUnroll(group: Group): boolean;
    visit(backReference: BackReference): void;
}