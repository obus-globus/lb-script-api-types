import type { RegexFlags } from '../../../../../../com/oracle/truffle/regex/RegexFlags.d.ts'
import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { RegexProperties } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexProperties.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { Term } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Term.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RegexASTPostProcessor extends Object {
    constructor(ast: RegexAST, compilationBuffer: CompilationBuffer)
    // private ast: RegexAST;
    // private compilationBuffer: CompilationBuffer;
    // private flags: RegexFlags;
    // private properties: RegexProperties;
    // private checkInnerLiteral(): void;
    // private isLiteralChar(t: Term): boolean;
    prepareForDFA(): void;
}