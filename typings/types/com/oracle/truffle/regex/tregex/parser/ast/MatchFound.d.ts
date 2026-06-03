import type { CompilationBuffer } from '../../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { RegexAST } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { RegexASTNode } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { Term } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Term.d.ts'
import type { JsonObject } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonObject.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
export class MatchFound extends Term {
    constructor()
    readonly next: RegexASTNode;
    copy(ast: RegexAST): MatchFound;
    copyRecursive(ast: RegexAST, compilationBuffer: CompilationBuffer): MatchFound;
    equalsSemantic(obj: RegexASTNode): boolean;
    getNext(): RegexASTNode;
    setNext(next: RegexASTNode): void;
    toJson(): JsonValue;
    toJson(typeName: string): JsonObject;
    toString(): string;
}