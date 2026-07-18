import type { SourceSection } from '../../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { AbstractRegexObject } from '../../../../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { RegexFlags } from '../../../../../../../com/oracle/truffle/regex/RegexFlags.d.ts'
import type { RegexLanguage } from '../../../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { RegexOptions } from '../../../../../../../com/oracle/truffle/regex/RegexOptions.d.ts'
import type { RegexSource } from '../../../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { StateIndex } from '../../../../../../../com/oracle/truffle/regex/tregex/automaton/StateIndex.d.ts'
import type { Counter$ThresholdCounter } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/Counter$ThresholdCounter.d.ts'
import type { RegexFlavor } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/RegexFlavor.d.ts'
import type { RegexProperties } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/RegexProperties.d.ts'
import type { Token$Quantifier } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/Token$Quantifier.d.ts'
import type { AtomicGroup } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/AtomicGroup.d.ts'
import type { BackReference } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/BackReference.d.ts'
import type { CharacterClass } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/CharacterClass.d.ts'
import type { ConditionalBackReferenceGroup } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/ConditionalBackReferenceGroup.d.ts'
import type { Group } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Group.d.ts'
import type { GroupBoundaries } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/GroupBoundaries.d.ts'
import type { InnerLiteral } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/InnerLiteral.d.ts'
import type { LookAheadAssertion } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookAheadAssertion.d.ts'
import type { LookBehindAssertion } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookBehindAssertion.d.ts'
import type { MatchFound } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/MatchFound.d.ts'
import type { PositionAssertion } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/PositionAssertion.d.ts'
import type { PositionAssertion$Type } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/PositionAssertion$Type.d.ts'
import type { QuantifiableTerm } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/QuantifiableTerm.d.ts'
import type { RegexASTNode } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { RegexASTRootNode } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTRootNode.d.ts'
import type { RegexASTSubtreeRootNode } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTSubtreeRootNode.d.ts'
import type { Sequence } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Sequence.d.ts'
import type { SubexpressionCall } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/SubexpressionCall.d.ts'
import type { Encodings$Encoding } from '../../../../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
import type { JsonArray } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonArray.d.ts'
import type { JsonConvertible } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class RegexAST extends Object implements StateIndex<RegexASTNode>, JsonConvertible {
    static sourceSectionsToJson(paramsourceSections: SourceSection[]): JsonArray;
    static sourceSectionsToJson(paramsourceSections: Stream<SourceSection>): JsonArray;
    constructor(language: RegexLanguage, source: RegexSource, flags: RegexFlags)
    // private captureGroups: Group[][];
    readonly conditionGroups: number[];
    readonly flags: RegexFlags;
    readonly flavorSpecificFlags: AbstractRegexObject;
    // private groupBoundariesDeduplicationMap: EconomicMap<GroupBoundaries, GroupBoundaries>;
    readonly groupCount: Counter$ThresholdCounter;
    readonly groupsWithGuards: (Object | null)[];
    readonly hardPrefixNodes: RegexASTNode[];
    readonly language: RegexLanguage;
    readonly nfaAnchoredInitialStates: PositionAssertion[];
    readonly nodeCount: Counter$ThresholdCounter;
    // private nodes: RegexASTNode[];
    readonly prefixNodes: RegexASTNode[];
    readonly properties: RegexProperties;
    // private quantifiers: Token$Quantifier[];
    readonly reachableCarets: PositionAssertion[];
    readonly reachableDollars: PositionAssertion[];
    // private recursivelyReferencedGroups: number[];
    readonly referencedGroups: number[];
    readonly root: Group;
    readonly source: RegexSource;
    // private sourceSections: EconomicMap<RegexASTNode, SourceSection[]>;
    readonly subtrees: (Object | null)[];
    readonly wrappedRoot: Group;
    readonly zeroWidthQuantifiables: QuantifiableTerm[];
    addSourceSection(node: RegexASTNode, sourceSection: SourceSection): void;
    addSourceSections(node: RegexASTNode, src: SourceSection[]): void;
    // private addToIndex(node: RegexASTNode): void;
    canTransformToDFA(): boolean;
    canTransformToDFAFailureReason(): string;
    clearRegisteredCaptureGroups(groupNumber: number): void;
    createAtomicGroup(): AtomicGroup;
    createBackReference(groupNumbers: number[]): BackReference;
    createCaptureGroup(groupNumber: number): Group;
    createCharacterClass(matcherBuilder: (Object | null)[]): CharacterClass;
    createConditionalBackReferenceGroup(referencedGroupNumber: number): Group;
    createGroup(): Group;
    createGroupBoundaries(updateIndices: number[], clearIndices: number[], firstGroup: number, lastGroup: number): GroupBoundaries;
    createLookAheadAssertion(negated: boolean): LookAheadAssertion;
    createLookBehindAssertion(negated: boolean): LookBehindAssertion;
    createNFAHelperNodes(rootNode: RegexASTSubtreeRootNode): void;
    // private createNFAInitialStates(): void;
    createPositionAssertion(type: PositionAssertion$Type): PositionAssertion;
    createPrefix(): void;
    // private createPrefixAnyMatcher(): CharacterClass;
    createRootNode(): RegexASTRootNode;
    createSequence(): Sequence;
    createSubexpressionCall(groupNumber: number): SubexpressionCall;
    extractInnerLiteral(): InnerLiteral;
    getAllQuantifierBounds(): number[];
    getConditionGroups(): number[];
    getEncoding(): Encodings$Encoding;
    getEntryAfterPrefix(): RegexASTNode;
    getFlags(): RegexFlags;
    getFlavor(): RegexFlavor;
    getFlavorSpecificFlags(): AbstractRegexObject;
    getGroup(groupNumber: number): Group[];
    getGroupByBoundaryIndex(index: number): Group[];
    getGroupCount(): Counter$ThresholdCounter;
    getGroupsWithGuards(): (Object | null)[];
    getHardPrefixNodes(): RegexASTNode[];
    getId(state: RegexASTNode): number;
    getLanguage(): RegexLanguage;
    getNFAAnchoredInitialState(prefixOffset: number): PositionAssertion;
    getNFAUnAnchoredInitialState(prefixOffset: number): MatchFound;
    getNfaAnchoredInitialStates(): PositionAssertion[];
    getNodeCount(): Counter$ThresholdCounter;
    getNumberOfCaptureGroups(): number;
    getNumberOfNodes(): number;
    getNumberOfStates(): number;
    getOptions(): RegexOptions;
    // private getOrCreateSourceSections(node: RegexASTNode): SourceSection[];
    getPrefixNodes(): RegexASTNode[];
    getProperties(): RegexProperties;
    getQuantifier(quantifierIndex: number): Token$Quantifier;
    getQuantifierArray(): Token$Quantifier[];
    getQuantifierCount(): number;
    getReachableCarets(): PositionAssertion[];
    getReachableDollars(): PositionAssertion[];
    getReferencedGroups(): number[];
    getRoot(): Group;
    getSource(): RegexSource;
    getSourceSections(node: RegexASTNode): SourceSection[];
    getState(id: number): RegexASTNode;
    getSubtrees(): (Object | null)[];
    getWrappedPrefixLength(): number;
    getWrappedRoot(): Group;
    getZeroWidthQuantifiables(): QuantifiableTerm[];
    hidePrefix(): void;
    // private initNodeId(node: RegexASTNode, id: number): void;
    isEmpty(): boolean;
    isGroupRecursivelyReferenced(groupNumber: number): boolean;
    isGroupReferenced(groupNumber: number): boolean;
    isLiteralString(): boolean;
    isNFAInitialState(node: RegexASTNode): boolean;
    register(atomicGroup: AtomicGroup): AtomicGroup;
    register(backReference: BackReference): BackReference;
    register(characterClass: CharacterClass): CharacterClass;
    register(group: ConditionalBackReferenceGroup): ConditionalBackReferenceGroup;
    register(group: Group): Group;
    register(lookAheadAssertion: LookAheadAssertion): LookAheadAssertion;
    register(lookBehindAssertion: LookBehindAssertion): LookBehindAssertion;
    register(positionAssertion: PositionAssertion): PositionAssertion;
    register(sequence: Sequence): Sequence;
    register(subexpressionCall: SubexpressionCall): SubexpressionCall;
    registerCaptureGroupCopy(groupCopy: Group): void;
    registerGroupWithGuards(group: Group): void;
    registerQuantifier(quantifiable: QuantifiableTerm): void;
    registerZeroWidthQuantifiable(zeroWidthQuantifiable: QuantifiableTerm): void;
    rootIsWrapped(): boolean;
    setFlags(flags: RegexFlags): void;
    setFlavorSpecificFlags(flavorSpecificFlags: AbstractRegexObject): void;
    setGroupRecursivelyReferenced(groupNumber: number): void;
    setIndex(index: RegexASTNode[]): void;
    setRoot(root: Group): void;
    toJson(): JsonValue;
    unhidePrefix(): void;
}