import type { Group } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Group.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { RegexASTNode } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { DepthFirstTraversalRegexASTVisitor } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/DepthFirstTraversalRegexASTVisitor.d.ts'
export class RegexASTPostProcessor$ClearRegisteredCaptureGroupsVisitor extends DepthFirstTraversalRegexASTVisitor {
    private constructor(ast: RegexAST)
    // private ast: RegexAST;
    clear(root: RegexASTNode): void;
    visit(group: Group): void;
}