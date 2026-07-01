import type { CompilationBuffer } from '../../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { Group } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Group.d.ts'
import type { QuantifiableTerm } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/QuantifiableTerm.d.ts'
import type { RegexAST } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { RegexASTNode } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { RegexASTSubtreeRootNode } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTSubtreeRootNode.d.ts'
import type { Term } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Term.d.ts'
import type { RegexASTVisitorIterable } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/RegexASTVisitorIterable.d.ts'
import type { JsonObject } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonObject.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
export class Sequence extends RegexASTNode implements RegexASTVisitorIterable {
    constructor()
    readonly terms: Term[];
    // private visitorIterationIndex: number;
    add(term: Term): void;
    copy(ast: RegexAST): Sequence;
    copyRecursive(ast: RegexAST, compilationBuffer: CompilationBuffer): Sequence;
    equalsSemantic(obj: RegexASTNode): boolean;
    get(i: number): Term;
    getEnclosedCaptureGroupsHigh(): number;
    getEnclosedCaptureGroupsLow(): number;
    getFirstTerm(): Term;
    getLastTerm(): Term;
    getParent(): Group;
    getSubTreeParent(): RegexASTSubtreeRootNode;
    getTerms(): Term[];
    isEmpty(): boolean;
    isFirstInGroup(): boolean;
    isLastInGroup(): boolean;
    isLiteral(): boolean;
    isPenultimateInGroup(): boolean;
    isSingleCharClass(): boolean;
    quantifierPassThroughGetQuantifiedTerm(): QuantifiableTerm;
    removeLastTerm(): void;
    removeTerm(i: number, compilationBuffer: CompilationBuffer): void;
    replace(index: number, term: Term): void;
    resetVisitorIterator(): void;
    setParent(parent: RegexASTNode): void;
    size(): number;
    toJson(): JsonValue;
    toJson(typeName: string): JsonObject;
    toString(): string;
    visitorGetNext(reverse: boolean): RegexASTNode;
    visitorHasNext(): boolean;
}