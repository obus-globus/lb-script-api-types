import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { RegexFlags } from '../../../../../../com/oracle/truffle/regex/RegexFlags.d.ts'
import type { RegexLanguage } from '../../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { RegexOptions } from '../../../../../../com/oracle/truffle/regex/RegexOptions.d.ts'
import type { RegexSource } from '../../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { CaseFoldData$CaseFoldUnfoldAlgorithm } from '../../../../../../com/oracle/truffle/regex/tregex/parser/CaseFoldData$CaseFoldUnfoldAlgorithm.d.ts'
import type { Counter$ThresholdCounter } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Counter$ThresholdCounter.d.ts'
import type { RegexASTBuilder$StashedState } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexASTBuilder$StashedState.d.ts'
import type { RegexProperties } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexProperties.d.ts'
import type { Token } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Token.d.ts'
import type { Token$BackReference } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Token$BackReference.d.ts'
import type { Token$CharacterClass } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Token$CharacterClass.d.ts'
import type { Token$ClassSet } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Token$ClassSet.d.ts'
import type { Token$LiteralCharacter } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Token$LiteralCharacter.d.ts'
import type { Token$Quantifier } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Token$Quantifier.d.ts'
import type { CharacterClass } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/CharacterClass.d.ts'
import type { Group } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Group.d.ts'
import type { PositionAssertion$Type } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/PositionAssertion$Type.d.ts'
import type { QuantifiableTerm } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/QuantifiableTerm.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { RegexASTNode } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { RegexASTSubtreeRootNode } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTSubtreeRootNode.d.ts'
import type { Sequence } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Sequence.d.ts'
import type { Term } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Term.d.ts'
import type { NodeCountVisitor } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/NodeCountVisitor.d.ts'
import type { Encodings$Encoding } from '../../../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class RegexASTBuilder extends Object {
    constructor(language: RegexLanguage, source: RegexSource, flags: RegexFlags, canExplodeUTF16: boolean, compilationBuffer: CompilationBuffer)
    // private ast: RegexAST;
    // private canExplodeUTF16: boolean;
    readonly compilationBuffer: CompilationBuffer;
    // private countVisitor: NodeCountVisitor;
    readonly curGroup: Group;
    readonly curSequence: Sequence;
    readonly curTerm: Term;
    // private encoding: Encodings$Encoding;
    // private groupCount: Counter$ThresholdCounter;
    // private groupStartPositions: EconomicMap<Group, number>;
    // private options: RegexOptions;
    readonly overrideSourceSection: SourceSection;
    // private properties: RegexProperties;
    addBackReference(token: Token$BackReference): void;
    addBackReference(token: Token$BackReference, ignoreCase: boolean): void;
    addBackReference(token: Token$BackReference, ignoreCase: boolean, ignoreCaseAltMode: boolean): void;
    addBackReference(groupNumber: number, namedReference: boolean, ignoreCase: boolean): void;
    addCaret(): void;
    addCaretOrLookBehind(lookbehind: (Object | null)[]): void;
    addCharClass(charSet: (Object | null)[]): void;
    addCharClass(charSet: (Object | null)[], wasSingleChar: boolean): void;
    addCharClass(charSet: (Object | null)[], wasSingleChar: boolean, sourceSection: SourceSection): void;
    addCharClass(token: Token$CharacterClass): void;
    addClassSet(token: Token$ClassSet, caseUnfoldAlgo: CaseFoldData$CaseFoldUnfoldAlgorithm): void;
    addDeadNode(): void;
    addDollar(): void;
    addDollarOrLookAhead(lookahead: (Object | null)[]): void;
    addLiteralChar(literalCharacter: Token$LiteralCharacter): void;
    // private addLookAhead(lookahead: (Object | null)[]): void;
    // private addLookBehind(lookbehind: (Object | null)[]): void;
    // private addNoLeadSurrogateBehind(): void;
    // private addNoTrailSurrogateAhead(): void;
    addPositionAssertion(token: Token): void;
    addPositionAssertion(type: PositionAssertion$Type): void;
    addQuantifier(quantifier: Token$Quantifier): void;
    // private addQuantifier(term: Term, quantifier: Token$Quantifier): QuantifiableTerm;
    // private addSourceSection(node: RegexASTNode, token: Token): void;
    addSubexpressionCall(groupNumber: number): void;
    // private addTerm(term: Term): void;
    addWordBoundaryAssertion(token: Token, wordChars: (Object | null)[], nonWordChars: (Object | null)[]): void;
    addWordNonBoundaryAssertion(token: Token, wordChars: (Object | null)[], nonWordChars: (Object | null)[]): void;
    addWordNonBoundaryAssertionPython(wordChars: (Object | null)[], nonWordChars: (Object | null)[]): void;
    clearOverrideSourceSection(): void;
    // private createCharClass(charSet: (Object | null)[], token: Token): CharacterClass;
    // private createCharClass(charSet: (Object | null)[], token: Token, wasSingleChar: boolean): CharacterClass;
    curGroupIsRoot(): boolean;
    getCompilationBuffer(): CompilationBuffer;
    getCurGroup(): Group;
    getCurGroupStartPosition(): number;
    getCurSequence(): Sequence;
    getCurTerm(): Term;
    // private mergeCharClasses(dst: CharacterClass, src: CharacterClass): void;
    // private mergeCommonPrefixes(group: Group): void;
    nextSequence(): void;
    // private optimizeGroup(group: Group): void;
    popGroup(): void;
    popGroup(token: Token): void;
    popRootGroup(): RegexAST;
    // private pruneCharClass(cps: (Object | null)[]): (Object | null)[];
    pushAtomicGroup(): void;
    pushAtomicGroup(token: Token): void;
    pushCaptureGroup(): void;
    pushCaptureGroup(token: Token): void;
    pushConditionalBackReferenceGroup(token: Token$BackReference): void;
    pushConditionalBackReferenceGroup(referencedGroupNumber: number, namedReference: boolean): void;
    pushGroup(): void;
    pushGroup(token: Token): void;
    // private pushGroup(token: Token, group: Group, parent: RegexASTSubtreeRootNode, openFirstSequence: boolean): Group;
    // private pushGroup(openNextSequence: boolean): void;
    pushLookAheadAssertion(token: Token, negate: boolean): void;
    pushLookAheadAssertion(negate: boolean): void;
    pushLookBehindAssertion(token: Token, negate: boolean): void;
    pushLookBehindAssertion(negate: boolean): void;
    pushRootGroup(): void;
    pushRootGroup(rootCapture: boolean): void;
    removeCurTerm(): void;
    replaceCurTermWithDeadNode(): void;
    // private setGroupStartPosition(group: Group, token: Token): void;
    // private setGroupStartPosition(group: Group, startPosition: number): void;
    setOverrideSourceSection(sourceSection: SourceSection): void;
    // private setQuantifier(term: QuantifiableTerm, quantifier: Token$Quantifier): void;
    // private shouldExplodeUTF16(): boolean;
    // private translateUnicodeCharClass(codePointSet: (Object | null)[], token: Token, wasSingleChar: boolean): Term;
    // private tryMergeSingleCharClassAlternations(): boolean;
    // private withTempState(tempGroup: Group, tempSequence: Sequence, tempTerm: Term): RegexASTBuilder$StashedState;
    wrapCurTermInAtomicGroup(): void;
    wrapCurTermInGroup(): void;
    // private wrapTermInGroup(term: Term): Group;
}