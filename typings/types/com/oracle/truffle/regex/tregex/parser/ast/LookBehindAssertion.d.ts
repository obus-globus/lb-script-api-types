import type { CompilationBuffer } from '../../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { LookAroundAssertion } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookAroundAssertion.d.ts'
import type { RegexAST } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { RegexASTNode } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
export class LookBehindAssertion extends LookAroundAssertion {
    private constructor(copy: LookBehindAssertion, ast: RegexAST)
    private constructor(copy: LookBehindAssertion, ast: RegexAST, compilationBuffer: CompilationBuffer)
    constructor(negated: boolean)
    copy(ast: RegexAST): LookBehindAssertion;
    copyRecursive(ast: RegexAST, compilationBuffer: CompilationBuffer): LookBehindAssertion;
    equalsSemantic(obj: RegexASTNode): boolean;
    getPrefix(): string;
    toJson(): JsonValue;
}