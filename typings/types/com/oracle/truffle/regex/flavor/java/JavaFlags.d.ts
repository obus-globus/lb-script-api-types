import type { AbstractConstantKeysObject } from '../../../../../../com/oracle/truffle/regex/AbstractConstantKeysObject.d.ts'
import type { AbstractRegexObject } from '../../../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { TruffleReadOnlyKeysArray } from '../../../../../../com/oracle/truffle/regex/util/TruffleReadOnlyKeysArray.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JavaFlags extends AbstractConstantKeysObject {
    static createNamedCaptureGroupMapInt(paramnamedCaptureGroups: { [key: string]: number[] }): AbstractRegexObject;
    static createNamedCaptureGroupMapListInt(paramnamedCaptureGroups: { [key: string]: number[] }): AbstractRegexObject;
    static isValidFlagChar(paramcandidateChar: number): boolean;
    static parseFlags(paramsource: string): JavaFlags;
    constructor(bits: number)
    readonly value: number;
    addFlag(flagChar: number): JavaFlags;
    delFlag(flagChar: number): JavaFlags;
    equals(other: Object | null): boolean;
    getKeys(): TruffleReadOnlyKeysArray;
    getValue(): number;
    hashCode(): number;
    isCanonEq(): boolean;
    isCaseInsensitive(): boolean;
    isComments(): boolean;
    isDotAll(): boolean;
    isLiteral(): boolean;
    isMemberReadableImpl(symbol: string): boolean;
    isMultiline(): boolean;
    // private isSet(flag: number): boolean;
    isUnicodeCase(): boolean;
    isUnicodeCharacterClass(): boolean;
    isUnixLines(): boolean;
    readMemberImpl(symbol: string): Object;
    toDisplayString(allowSideEffects: boolean): Object;
    toString(): string;
}