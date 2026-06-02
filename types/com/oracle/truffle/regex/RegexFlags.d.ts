import type { AbstractConstantKeysObject } from '../../../../com/oracle/truffle/regex/AbstractConstantKeysObject.d.ts'
import type { AbstractRegexObject } from '../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { RegexFlags$Builder } from '../../../../com/oracle/truffle/regex/RegexFlags$Builder.d.ts'
import type { RegexSource } from '../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { JsonConvertible } from '../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonValue } from '../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { TruffleReadOnlyKeysArray } from '../../../../com/oracle/truffle/regex/util/TruffleReadOnlyKeysArray.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RegexFlags extends AbstractConstantKeysObject implements JsonConvertible {
    static DEFAULT: RegexFlags;
    static builder(): RegexFlags$Builder;
    static createNamedCaptureGroupMapInt(paramnamedCaptureGroups: { [key: string]: Object | null }): AbstractRegexObject;
    static createNamedCaptureGroupMapListInt(paramnamedCaptureGroups: { [key: string]: Object | null }): AbstractRegexObject;
    static isValidFlagChar(paramcandidateChar: string): boolean;
    static isValidLocalFlagChar(paramcandidateChar: string): boolean;
    static parseFlags(paramsource: RegexSource): RegexFlags;
    private constructor(value: number)
    private constructor(source: string, value: number)
    readonly source: string;
    // private value: number;
    addFlags(otherFlags: RegexFlags): RegexFlags;
    addNewFlagModifier(regexSource: RegexSource, flagChar: string): RegexFlags;
    delFlags(otherFlags: RegexFlags): RegexFlags;
    equals(obj: Object | null): boolean;
    getKeys(): TruffleReadOnlyKeysArray;
    getSource(): string;
    hasIndices(): boolean;
    hashCode(): number;
    isDotAll(): boolean;
    isEitherUnicode(): boolean;
    isGlobal(): boolean;
    isIgnoreCase(): boolean;
    isMemberReadableImpl(symbol: string): boolean;
    isMultiline(): boolean;
    isNone(): boolean;
    // private isSet(flag: number): boolean;
    isSticky(): boolean;
    isUnicode(): boolean;
    isUnicodeSets(): boolean;
    overlaps(otherFlags: RegexFlags): boolean;
    readMemberImpl(symbol: string): Object;
    toDisplayString(allowSideEffects: boolean): Object;
    toJson(): JsonValue;
    toString(): string;
}