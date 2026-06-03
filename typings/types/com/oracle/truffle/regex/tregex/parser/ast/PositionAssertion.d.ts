import type { CompilationBuffer } from '../../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { PositionAssertion$Type } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/PositionAssertion$Type.d.ts'
import type { RegexAST } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { RegexASTNode } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { Term } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Term.d.ts'
import type { JsonObject } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonObject.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
export class PositionAssertion extends Term {
    private constructor(copy: PositionAssertion)
    constructor(type: PositionAssertion$Type)
    readonly next: RegexASTNode;
    type: PositionAssertion$Type;
    copy(ast: RegexAST): PositionAssertion;
    copyRecursive(ast: RegexAST, compilationBuffer: CompilationBuffer): Term;
    equalsSemantic(obj: RegexASTNode): boolean;
    getNext(): RegexASTNode;
    isCaret(): boolean;
    isDollar(): boolean;
    setNext(next: RegexASTNode): void;
    toJson(): JsonValue;
    toJson(typeName: string): JsonObject;
    toString(): string;
}