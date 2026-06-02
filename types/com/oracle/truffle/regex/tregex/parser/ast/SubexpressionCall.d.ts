import type { RegexOptions } from '../../../../../../../com/oracle/truffle/regex/RegexOptions.d.ts'
import type { CompilationBuffer } from '../../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { QuantifiableTerm } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/QuantifiableTerm.d.ts'
import type { RegexAST } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { RegexASTNode } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { Sequence } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Sequence.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
export class SubexpressionCall extends QuantifiableTerm {
    private constructor(copy: SubexpressionCall)
    constructor(groupNr: number)
    readonly groupNr: number;
    copy(ast: RegexAST): SubexpressionCall;
    copyRecursive(ast: RegexAST, compilationBuffer: CompilationBuffer): SubexpressionCall;
    equalsSemantic(obj: RegexASTNode, ignoreQuantifier: boolean): boolean;
    getGroupNr(): number;
    getParent(): Sequence;
    isUnrollingCandidate(options: RegexOptions): boolean;
    toJson(): JsonValue;
    toString(): string;
}