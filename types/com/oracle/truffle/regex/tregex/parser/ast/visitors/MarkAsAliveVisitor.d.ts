import type { RegexASTNode } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { DepthFirstTraversalRegexASTVisitor } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/DepthFirstTraversalRegexASTVisitor.d.ts'
export class MarkAsAliveVisitor extends DepthFirstTraversalRegexASTVisitor {
    static markAsAlive(paramrunRoot: RegexASTNode): void;
    constructor()
    doVisit(cur: RegexASTNode): void;
}