import type { CompilationBuffer } from '../../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { Group } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Group.d.ts'
import type { RegexAST } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { RegexASTNode } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
export class ConditionalBackReferenceGroup extends Group {
    static groupNumberToBoundaryIndexEnd(paramgroupNumber: number): number;
    static groupNumberToBoundaryIndexStart(paramgroupNumber: number): number;
    private constructor(copy: ConditionalBackReferenceGroup)
    constructor(referencedGroupNumber: number)
    readonly referencedGroupNumber: number;
    copy(ast: RegexAST): ConditionalBackReferenceGroup;
    copyRecursive(ast: RegexAST, compilationBuffer: CompilationBuffer): ConditionalBackReferenceGroup;
    equalsSemantic(obj: RegexASTNode, ignoreQuantifier: boolean): boolean;
    getReferencedGroupNumber(): number;
    toJson(): JsonValue;
    toString(): string;
}