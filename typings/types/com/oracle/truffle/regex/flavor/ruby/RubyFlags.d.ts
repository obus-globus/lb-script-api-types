import type { AbstractConstantKeysObject } from '../../../../../../com/oracle/truffle/regex/AbstractConstantKeysObject.d.ts'
import type { AbstractRegexObject } from '../../../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { RubyFlags$Mode } from '../../../../../../com/oracle/truffle/regex/flavor/ruby/RubyFlags$Mode.d.ts'
import type { TruffleReadOnlyKeysArray } from '../../../../../../com/oracle/truffle/regex/util/TruffleReadOnlyKeysArray.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RubyFlags extends AbstractConstantKeysObject {
    static createNamedCaptureGroupMapInt(paramnamedCaptureGroups: { [key: string]: Object | null }): AbstractRegexObject;
    static createNamedCaptureGroupMapListInt(paramnamedCaptureGroups: { [key: string]: Object | null }): AbstractRegexObject;
    static isBitFlag(paramcandidateChar: number): boolean;
    static isTypeFlag(paramcandidateChar: number): boolean;
    static isValidFlagChar(paramcandidateChar: number): boolean;
    private constructor(value: number, mode: RubyFlags$Mode)
    constructor(source: string)
    // private mode: RubyFlags$Mode;
    // private value: number;
    addFlag(flagChar: number): RubyFlags;
    delFlag(flagChar: number): RubyFlags;
    equals(other: Object | null): boolean;
    getKeys(): TruffleReadOnlyKeysArray;
    hasFlag(flagChar: number): boolean;
    hashCode(): number;
    isAscii(): boolean;
    isDefault(): boolean;
    isExtended(): boolean;
    isIgnoreCase(): boolean;
    isMemberReadableImpl(symbol: string): boolean;
    isMultiline(): boolean;
    isSticky(): boolean;
    isUnicode(): boolean;
    readMemberImpl(symbol: string): Object;
    toDisplayString(allowSideEffects: boolean): Object;
    toString(): string;
}