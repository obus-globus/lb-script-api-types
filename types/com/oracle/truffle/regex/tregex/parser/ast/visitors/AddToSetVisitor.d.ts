import type { CharacterClass } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/CharacterClass.d.ts'
import type { RegexASTNode } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { DepthFirstTraversalRegexASTVisitor } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/DepthFirstTraversalRegexASTVisitor.d.ts'
export class AddToSetVisitor extends DepthFirstTraversalRegexASTVisitor {
    static addCharacterClasses(paramset: S[], paramrunRoot: RegexASTNode): void;
    private constructor(set: S[])
    // private set: S[];
    visit(characterClass: CharacterClass): void;
}