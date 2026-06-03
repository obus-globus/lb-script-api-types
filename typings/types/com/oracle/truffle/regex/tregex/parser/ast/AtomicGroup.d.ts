import type { CompilationBuffer } from '../../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { RegexAST } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { RegexASTNode } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { RegexASTSubtreeRootNode } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTSubtreeRootNode.d.ts'
import type { Term } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Term.d.ts'
import type { JsonObject } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonObject.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
export class AtomicGroup extends RegexASTSubtreeRootNode {
    constructor()
    private constructor(copy: AtomicGroup, ast: RegexAST)
    private constructor(copy: AtomicGroup, ast: RegexAST, compilationBuffer: CompilationBuffer)
    copy(ast: RegexAST): RegexASTSubtreeRootNode;
    copyRecursive(ast: RegexAST, compilationBuffer: CompilationBuffer): Term;
    equalsSemantic(obj: RegexASTNode): boolean;
    getEnclosedCaptureGroupsHigh(): number;
    getEnclosedCaptureGroupsLow(): number;
    getPrefix(): string;
    toJson(): JsonValue;
    toJson(typeName: string): JsonObject;
}