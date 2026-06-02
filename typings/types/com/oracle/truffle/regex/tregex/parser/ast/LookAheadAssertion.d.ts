import type { CompilationBuffer } from '../../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { LookAroundAssertion } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookAroundAssertion.d.ts'
import type { RegexAST } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { RegexASTNode } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
export class LookAheadAssertion extends LookAroundAssertion {
    private constructor(copy: LookAheadAssertion, ast: RegexAST)
    private constructor(copy: LookAheadAssertion, ast: RegexAST, compilationBuffer: CompilationBuffer)
    constructor(negated: boolean)
    readonly referencedConditionGroups: number[];
    copy(ast: RegexAST): LookAheadAssertion;
    copyRecursive(ast: RegexAST, compilationBuffer: CompilationBuffer): LookAheadAssertion;
    equalsSemantic(obj: RegexASTNode): boolean;
    getPrefix(): string;
    getReferencedConditionGroups(): number[];
    registerReferencedConditionGroup(groupNumber: number): void;
    toJson(): JsonValue;
}