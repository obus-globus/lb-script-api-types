import type { BackReference } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/BackReference.d.ts'
import type { CharacterClass } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/CharacterClass.d.ts'
import type { Group } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Group.d.ts'
import type { RegexASTNode } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { DepthFirstTraversalRegexASTVisitor } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/DepthFirstTraversalRegexASTVisitor.d.ts'
export class RegexASTBuilder$IsDeterministicVisitor extends DepthFirstTraversalRegexASTVisitor {
    private constructor()
    // private result: boolean;
    isDeterministic(node: RegexASTNode): boolean;
    visit(backReference: BackReference): void;
    visit(characterClass: CharacterClass): void;
    visit(group: Group): void;
}