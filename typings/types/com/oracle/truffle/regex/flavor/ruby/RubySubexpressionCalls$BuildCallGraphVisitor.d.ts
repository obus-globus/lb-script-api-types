import type { RubySubexpressionCalls$CallGraphNode } from '../../../../../../com/oracle/truffle/regex/flavor/ruby/RubySubexpressionCalls$CallGraphNode.d.ts'
import type { Group } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Group.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { SubexpressionCall } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/SubexpressionCall.d.ts'
import type { DepthFirstTraversalRegexASTVisitor } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/DepthFirstTraversalRegexASTVisitor.d.ts'
export class RubySubexpressionCalls$BuildCallGraphVisitor extends DepthFirstTraversalRegexASTVisitor {
    constructor(ast: RegexAST)
    // private ast: RegexAST;
    callGraph: Map<RubySubexpressionCalls$CallGraphNode, RubySubexpressionCalls$CallGraphNode[]>;
    // private enclosingCaptureGroups: Group[];
    inDegree: Map<RubySubexpressionCalls$CallGraphNode, number>;
    // private addEdge(from: RubySubexpressionCalls$CallGraphNode, to: RubySubexpressionCalls$CallGraphNode): void;
    leave(group: Group): void;
    run(): void;
    visit(group: Group): void;
    visit(subexpressionCall: SubexpressionCall): void;
}