import type { Group } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Group.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { DepthFirstTraversalRegexASTVisitor } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/DepthFirstTraversalRegexASTVisitor.d.ts'
export class RegexASTPostProcessor$DisableCaptureGroupsVisitor extends DepthFirstTraversalRegexASTVisitor {
    static disableCaptureGroups(paramast: RegexAST): void;
    private constructor(ast: RegexAST)
    // private ast: RegexAST;
    visit(group: Group): void;
}