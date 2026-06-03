import type { RegexOptions } from '../../../../../../../com/oracle/truffle/regex/RegexOptions.d.ts'
import type { CompilationBuffer } from '../../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { QuantifiableTerm } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/QuantifiableTerm.d.ts'
import type { RegexAST } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { RegexASTNode } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { JsonObject } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonObject.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
export class BackReference extends QuantifiableTerm {
    private constructor(copy: BackReference)
    constructor(referencedGroupNumbers: number[])
    readonly groupNumbers: number[];
    copy(ast: RegexAST): BackReference;
    copyRecursive(ast: RegexAST, compilationBuffer: CompilationBuffer): BackReference;
    equalsSemantic(obj: RegexASTNode): boolean;
    equalsSemantic(obj: RegexASTNode, ignoreQuantifier: boolean): boolean;
    getGroupNumbers(): number[];
    isForwardReference(): boolean;
    isIgnoreCaseReference(): boolean;
    isIgnoreCaseReferenceAltMode(): boolean;
    isNestedBackReference(): boolean;
    isNestedOrForwardReference(): boolean;
    isUnrollingCandidate(options: RegexOptions): boolean;
    setForwardReference(): void;
    setIgnoreCaseReference(): void;
    setIgnoreCaseReferenceAltMode(): void;
    setNestedBackReference(): void;
    setNestedOrForwardReference(): void;
    toJson(): JsonValue;
    toJson(typeName: string): JsonObject;
    toString(): string;
}