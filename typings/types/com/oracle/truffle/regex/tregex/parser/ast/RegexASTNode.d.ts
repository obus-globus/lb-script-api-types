import type { CompilationBuffer } from '../../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { AtomicGroup } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/AtomicGroup.d.ts'
import type { BackReference } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/BackReference.d.ts'
import type { CharacterClass } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/CharacterClass.d.ts'
import type { ConditionalBackReferenceGroup } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/ConditionalBackReferenceGroup.d.ts'
import type { Group } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Group.d.ts'
import type { LookAheadAssertion } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookAheadAssertion.d.ts'
import type { LookAroundAssertion } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookAroundAssertion.d.ts'
import type { LookBehindAssertion } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookBehindAssertion.d.ts'
import type { MatchFound } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/MatchFound.d.ts'
import type { PositionAssertion } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/PositionAssertion.d.ts'
import type { QuantifiableTerm } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/QuantifiableTerm.d.ts'
import type { RegexAST } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { RegexASTSubtreeRootNode } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTSubtreeRootNode.d.ts'
import type { Sequence } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Sequence.d.ts'
import type { SubexpressionCall } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/SubexpressionCall.d.ts'
import type { JsonConvertible } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonObject } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonObject.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class RegexASTNode extends Object implements JsonConvertible {
    constructor()
    constructor(copy: RegexASTNode)
    // private flags: number;
    readonly id: number;
    readonly maxPath: number;
    readonly minPath: number;
    readonly parent: RegexASTNode;
    readonly prefixLengthMax: number;
    readonly prefixLengthMin: number;
    areAllFlagsSet(multipleFlags: number): boolean;
    asAtomicGroup(): AtomicGroup;
    asBackReference(): BackReference;
    asCharacterClass(): CharacterClass;
    asConditionalBackReferenceGroup(): ConditionalBackReferenceGroup;
    asGroup(): Group;
    asLookAheadAssertion(): LookAheadAssertion;
    asLookAroundAssertion(): LookAroundAssertion;
    asLookBehindAssertion(): LookBehindAssertion;
    asMatchFound(): MatchFound;
    asPositionAssertion(): PositionAssertion;
    asQuantifiableTerm(): QuantifiableTerm;
    asSequence(): Sequence;
    asSubexpressionCall(): SubexpressionCall;
    asSubtreeRootNode(): RegexASTSubtreeRootNode;
    clearFlags(mask: number): void;
    copy(ast: RegexAST): RegexASTNode;
    copyRecursive(ast: RegexAST, compilationBuffer: CompilationBuffer): RegexASTNode;
    endsWithDollar(): boolean;
    equalsSemantic(obj: RegexASTNode): boolean;
    getFlags(mask: number): number;
    getId(): number;
    getMaxPath(): number;
    getMinPath(): number;
    getParent(): RegexASTNode;
    getPrefixLengthMax(): number;
    getPrefixLengthMin(): number;
    getSubTreeParent(): RegexASTSubtreeRootNode;
    hasAtomicGroups(): boolean;
    hasBackReferences(): boolean;
    hasCaptureGroups(): boolean;
    hasCaret(): boolean;
    hasDollar(): boolean;
    hasEmptyGuard(): boolean;
    hasLookAheads(): boolean;
    hasLookArounds(): boolean;
    hasLookBehinds(): boolean;
    hasLoops(): boolean;
    hasQuantifiers(): boolean;
    hasVariablePrefixLength(): boolean;
    idInitialized(): boolean;
    incMaxPath(): void;
    incMaxPath(n: number): void;
    incMinPath(): void;
    incMinPath(n: number): void;
    isAtomicGroup(): boolean;
    isBackReference(): boolean;
    isCaret(): boolean;
    isCharacterClass(): boolean;
    isConditionalBackReferenceGroup(): boolean;
    isDead(): boolean;
    isDollar(): boolean;
    isExpandedQuantifier(): boolean;
    isFlagSet(flag: number): boolean;
    isGroup(): boolean;
    isGroupWithGuards(): boolean;
    isInLookAheadAssertion(): boolean;
    isInLookAroundAssertion(): boolean;
    isInLookBehindAssertion(): boolean;
    isLookAheadAssertion(): boolean;
    isLookAroundAssertion(): boolean;
    isLookBehindAssertion(): boolean;
    isMandatoryQuantifier(): boolean;
    isMandatoryUnrolledQuantifier(): boolean;
    isMatchFound(): boolean;
    isOptionalQuantifier(): boolean;
    isPositionAssertion(): boolean;
    isPrefix(): boolean;
    isQuantifiableTerm(): boolean;
    isQuantifierPassThroughSequence(): boolean;
    isRoot(): boolean;
    isSequence(): boolean;
    isSubexpressionCall(): boolean;
    isSubtreeRoot(): boolean;
    markAsDead(): void;
    mayMatchEmptyString(): boolean;
    setDead(dead: boolean): void;
    setEmptyGuard(emptyGuard: boolean): void;
    setEndsWithDollar(): void;
    setEndsWithDollar(endsWithDollar: boolean): void;
    setExpandedQuantifier(expandedQuantifier: boolean): void;
    setFlag(flag: number): void;
    setFlag(flag: number, value: boolean): void;
    setFlags(newFlags: number, mask: number): void;
    setHasAtomicGroups(): void;
    setHasAtomicGroups(hasAtomicGroups: boolean): void;
    setHasBackReferences(): void;
    setHasCaptureGroups(): void;
    setHasCaret(): void;
    setHasCaret(hasCaret: boolean): void;
    setHasDollar(): void;
    setHasDollar(hasDollar: boolean): void;
    setHasLookAheads(): void;
    setHasLookBehinds(): void;
    setHasLoops(): void;
    setHasLoops(hasLoops: boolean): void;
    setHasQuantifiers(): void;
    setId(id: number): void;
    setMandatoryQuantifier(mandatoryQuantifier: boolean): void;
    setMaxPath(n: number): void;
    setMayMatchEmptyString(value: boolean): void;
    setMinPath(n: number): void;
    setOptionalQuantifier(optionalQuantifier: boolean): void;
    setParent(parent: RegexASTNode): void;
    setPrefix(): void;
    setPrefixLengthMax(prefixLengthMax: number): void;
    setPrefixLengthMin(prefixLengthMin: number): void;
    setQuantifierPassThroughSequence(quantifierPassThroughSequence: boolean): void;
    setStartsWithCaret(): void;
    setStartsWithCaret(startsWithCaret: boolean): void;
    startsWithCaret(): boolean;
    toJson(typeName: string): JsonObject;
    toJson(): JsonValue;
    toStringWithID(): string;
}