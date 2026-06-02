import type { AbstractConstantKeysObject } from '../../../../../../com/oracle/truffle/regex/AbstractConstantKeysObject.d.ts'
import type { AbstractRegexObject } from '../../../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { RegexSource } from '../../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { PythonREMode } from '../../../../../../com/oracle/truffle/regex/flavor/python/PythonREMode.d.ts'
import type { TruffleReadOnlyKeysArray } from '../../../../../../com/oracle/truffle/regex/util/TruffleReadOnlyKeysArray.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PythonFlags extends AbstractConstantKeysObject {
    static EMPTY_INSTANCE: PythonFlags;
    static TYPE_FLAGS_INSTANCE: PythonFlags;
    static createNamedCaptureGroupMapInt(paramnamedCaptureGroups: { [key: string]: Object | null }): AbstractRegexObject;
    static createNamedCaptureGroupMapListInt(paramnamedCaptureGroups: { [key: string]: Object | null }): AbstractRegexObject;
    static isTypeFlagChar(paramcandidateChar: number): boolean;
    static isValidFlagChar(paramcandidateChar: number): boolean;
    private constructor(value: number)
    constructor(source: string)
    // private value: number;
    addFlag(flagChar: number): PythonFlags;
    addFlags(otherFlags: PythonFlags): PythonFlags;
    delFlags(otherFlags: PythonFlags): PythonFlags;
    equals(other: Object | null): boolean;
    fixFlags(source: RegexSource, mode: PythonREMode): PythonFlags;
    getKeys(): TruffleReadOnlyKeysArray;
    // private hasFlag(flag: number): boolean;
    hashCode(): number;
    isAscii(): boolean;
    isDotAll(): boolean;
    isIgnoreCase(): boolean;
    isLocale(): boolean;
    isMemberReadableImpl(symbol: string): boolean;
    isMultiLine(): boolean;
    isUnicode(mode: PythonREMode): boolean;
    isUnicodeExplicitlySet(): boolean;
    isVerbose(): boolean;
    numberOfTypeFlags(): number;
    overlaps(otherFlags: PythonFlags): boolean;
    readMemberImpl(symbol: string): Object;
    toDisplayString(allowSideEffects: boolean): Object;
    toString(): string;
}