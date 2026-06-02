import type { RegexOptions } from '../../../../../../../com/oracle/truffle/regex/RegexOptions.d.ts'
import type { CompilationBuffer } from '../../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { QuantifiableTerm } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/QuantifiableTerm.d.ts'
import type { RegexAST } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { RegexASTNode } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { Sequence } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Sequence.d.ts'
import type { RegexASTVisitorIterable } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/RegexASTVisitorIterable.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
export class Group extends QuantifiableTerm implements RegexASTVisitorIterable {
    static groupNumberToBoundaryIndexEnd(paramgroupNumber: number): number;
    static groupNumberToBoundaryIndexStart(paramgroupNumber: number): number;
    constructor()
    constructor(copy: Group)
    constructor(groupNumber: number)
    readonly alternatives: Sequence[];
    readonly enclosedCaptureGroupsHi: number;
    readonly enclosedCaptureGroupsLo: number;
    readonly enclosedZeroWidthGroupsHi: number;
    readonly enclosedZeroWidthGroupsLo: number;
    readonly groupNumber: number;
    readonly groupsWithGuardsIndex: number;
    // private visitorIterationIndex: number;
    add(sequence: Sequence): void;
    addSequence(ast: RegexAST): Sequence;
    alternativesToString(): string;
    // private checkMaxSize(): void;
    clearGroupNumber(): void;
    copy(ast: RegexAST): Group;
    copyRecursive(ast: RegexAST, compilationBuffer: CompilationBuffer): Group;
    equalsSemantic(obj: RegexASTNode, ignoreQuantifier: boolean): boolean;
    getAlternatives(): Sequence[];
    getBoundaryIndexEnd(): number;
    getBoundaryIndexStart(): number;
    getCaptureGroupsHi(): number;
    getCaptureGroupsLo(): number;
    getEnclosedCaptureGroupsHi(): number;
    getEnclosedCaptureGroupsLo(): number;
    getEnclosedZeroWidthGroupsHi(): number;
    getEnclosedZeroWidthGroupsLo(): number;
    getFirstAlternative(): Sequence;
    getGroupNumber(): number;
    getGroupsWithGuardsIndex(): number;
    getLastAlternative(): Sequence;
    hasEnclosedCaptureGroups(): boolean;
    hasGroupWithGuardsIndex(): boolean;
    insertFirst(sequence: Sequence): void;
    isAlwaysZeroWidth(): boolean;
    isCapturing(): boolean;
    isEmpty(): boolean;
    isLiteral(): boolean;
    isLocalFlags(): boolean;
    isLoop(): boolean;
    isUnrollingCandidate(options: RegexOptions): boolean;
    loopToString(): string;
    removeLastSequence(): void;
    resetVisitorIterator(): void;
    setAlternatives(alternatives: Sequence[]): void;
    setEnclosedCaptureGroupsHi(enclosedCaptureGroupsHi: number): void;
    setEnclosedCaptureGroupsLo(enclosedCaptureGroupsLo: number): void;
    setEnclosedZeroWidthGroupsHi(enclosedZeroWidthGroupsHi: number): void;
    setEnclosedZeroWidthGroupsLo(enclosedZeroWidthGroupsLo: number): void;
    setGroupNumber(groupNumber: number): void;
    setGroupsWithGuardsIndex(groupsWithGuardsIndex: number): void;
    setLocalFlags(loop: boolean): void;
    setLoop(loop: boolean): void;
    size(): number;
    toJson(): JsonValue;
    toString(): string;
    visitorGetNext(reverse: boolean): RegexASTNode;
    visitorHasNext(): boolean;
}