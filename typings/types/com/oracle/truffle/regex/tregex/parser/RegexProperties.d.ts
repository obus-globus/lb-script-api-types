import type { JsonConvertible } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonValue } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RegexProperties extends Object implements JsonConvertible {
    constructor()
    // private flags: number;
    readonly innerLiteralEnd: number;
    readonly innerLiteralStart: number;
    charClassesCanBeMatchedWithMask(): boolean;
    // private clearFlag(flag: number): void;
    getFlag(flag: number): boolean;
    getInnerLiteralEnd(): number;
    getInnerLiteralStart(): number;
    hasAlternations(): boolean;
    hasBackReferences(): boolean;
    hasCaptureGroups(): boolean;
    hasCaptureGroupsInLookAroundAssertions(): boolean;
    hasCharClasses(): boolean;
    hasConditionalBackReferences(): boolean;
    hasConditionalReferencesIntoLookAheads(): boolean;
    hasEmptyCaptureGroups(): boolean;
    hasInnerLiteral(): boolean;
    hasLargeBoundedQuantifiers(): boolean;
    hasLoneSurrogates(): boolean;
    hasLookAheadAssertions(): boolean;
    hasLookAroundAssertions(): boolean;
    hasLookAroundWithCaptureGroupsNestedInQuantifier(): boolean;
    hasLookBehindAssertions(): boolean;
    hasMatchBoundaryAssertions(): boolean;
    hasNegativeLookAheadAssertions(): boolean;
    hasNegativeLookBehindAssertions(): boolean;
    hasNestedBoundedQuantifiers(): boolean;
    hasNestedLookBehindAssertions(): boolean;
    hasNonLiteralLookBehindAssertions(): boolean;
    hasQuantifiers(): boolean;
    hasRecursiveBackReferences(): boolean;
    isFixedCodePointWidth(): boolean;
    setAlternations(): void;
    setBackReferences(): void;
    setCaptureGroups(): void;
    setCaptureGroupsInLookAroundAssertions(): void;
    setCharClasses(): void;
    setConditionalBackReferences(): void;
    setConditionalReferencesIntoLookAheads(): void;
    setEmptyCaptureGroups(): void;
    // private setFlag(flag: number): void;
    setInnerLiteral(start: number, end: number): void;
    setLargeBoundedQuantifiers(): void;
    setLoneSurrogates(): void;
    setLookAheadAssertions(): void;
    setLookAroundWithCaptureGroupsNestedInQuantifier(): void;
    setLookBehindAssertions(): void;
    setMatchBoundaryAssertions(): void;
    setNegativeLookAheadAssertions(): void;
    setNegativeLookBehindAssertions(): void;
    setNestedBoundedQuantifier(): void;
    setNestedLookBehindAssertions(): void;
    setNonLiteralLookBehindAssertions(): void;
    setQuantifiers(): void;
    setRecursiveBackReferences(): void;
    toJson(): JsonValue;
    unsetCharClassesCanBeMatchedWithMask(): void;
    unsetFixedCodePointWidth(): void;
}