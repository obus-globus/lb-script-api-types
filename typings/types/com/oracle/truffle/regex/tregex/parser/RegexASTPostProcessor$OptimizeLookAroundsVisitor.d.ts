import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { RegexASTPostProcessor$OptimizeLookAroundsVisitor$LookAroundOptimization } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexASTPostProcessor$OptimizeLookAroundsVisitor$LookAroundOptimization.d.ts'
import type { LookAroundAssertion } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookAroundAssertion.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { Sequence } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Sequence.d.ts'
import type { DepthFirstTraversalRegexASTVisitor } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/DepthFirstTraversalRegexASTVisitor.d.ts'
import type { NodeCountVisitor } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/NodeCountVisitor.d.ts'
export class RegexASTPostProcessor$OptimizeLookAroundsVisitor extends DepthFirstTraversalRegexASTVisitor {
    static optimizeLookArounds(paramast: RegexAST, paramcompilationBuffer: CompilationBuffer): void;
    private constructor(ast: RegexAST, compilationBuffer: CompilationBuffer)
    // private ast: RegexAST;
    // private compilationBuffer: CompilationBuffer;
    // private countVisitor: NodeCountVisitor;
    leave(sequence: Sequence): void;
    // private optimizeLookAround(lookaround: LookAroundAssertion): RegexASTPostProcessor$OptimizeLookAroundsVisitor$LookAroundOptimization;
}