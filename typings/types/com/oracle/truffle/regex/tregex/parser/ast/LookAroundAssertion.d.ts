import type { CompilationBuffer } from '../../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { RegexAST } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { RegexASTSubtreeRootNode } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTSubtreeRootNode.d.ts'
export abstract class LookAroundAssertion extends RegexASTSubtreeRootNode {
    constructor(copy: LookAroundAssertion, ast: RegexAST)
    constructor(copy: LookAroundAssertion, ast: RegexAST, compilationBuffer: CompilationBuffer)
    constructor(negated: boolean)
    endsWithCharClass(): boolean;
    getLiteralLength(): number;
    groupEqualsSemantic(o: LookAroundAssertion): boolean;
    isLiteral(): boolean;
    isNegated(): boolean;
    isSingleCCNonCapturingLiteral(): boolean;
    setNegated(negated: boolean): void;
    startsWithCharClass(): boolean;
}