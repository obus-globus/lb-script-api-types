import type { ClassSetContents$Kind } from '../../../../../com/oracle/truffle/regex/charset/ClassSetContents$Kind.d.ts'
import type { Range } from '../../../../../com/oracle/truffle/regex/charset/Range.d.ts'
import type { JsonConvertible } from '../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonValue } from '../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClassSetContents extends Object implements JsonConvertible {
    static createBrokenRange(paramlo: number, paramhi: number): ClassSetContents;
    static createCharacter(paramcodePoint: number): ClassSetContents;
    static createCharacterClass(paramcodePointSet: (Object | null)[]): ClassSetContents;
    static createClass(paramcodePointSet: (Object | null)[], paramstrings: string[], parammayContainStrings: boolean): ClassSetContents;
    static createPOSIXCollationElement(paramcodePoint: number): ClassSetContents;
    static createPOSIXCollationElement(paramstring: string): ClassSetContents;
    static createPOSIXCollationEquivalenceClass(paramcodePoint: number): ClassSetContents;
    static createPOSIXCollationEquivalenceClass(paramstring: string): ClassSetContents;
    static createRange(paramlo: number, paramhi: number): ClassSetContents;
    static createStrings(paramsingleCodePoints: (Object | null)[], paramstrings: string[]): ClassSetContents;
    static createUnicodePropertyOfStrings(paramcodePointSet: (Object | null)[], paramstrings: string[]): ClassSetContents;
    private constructor(kind: ClassSetContents$Kind, codePointSet: (Object | null)[], strings: string[], mayContainStrings: boolean)
    readonly codePointSet: (Object | null)[];
    // private kind: ClassSetContents$Kind;
    // private mayContainStrings: boolean;
    readonly strings: string[];
    caseFold(tmp: Range[]): ClassSetContents;
    getCodePoint(): number;
    getCodePointSet(): (Object | null)[];
    getRangeHi(): number;
    getRangeLo(): number;
    getStrings(): string[];
    isAllowedInRange(): boolean;
    isBrokenRange(): boolean;
    isCharacter(): boolean;
    isCharacterClass(): boolean;
    isCodePointSetOnly(): boolean;
    isEmpty(): boolean;
    isPosixCollationElement(): boolean;
    isPosixCollationEquivalenceClass(): boolean;
    isRange(): boolean;
    isRangeOrBrokenRange(): boolean;
    mayContainStrings(): boolean;
    toJson(): JsonValue;
    unionUnicodePropertyOfStrings(other: ClassSetContents): ClassSetContents;
}