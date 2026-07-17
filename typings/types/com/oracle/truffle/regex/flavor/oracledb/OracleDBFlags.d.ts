import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { AbstractConstantKeysObject } from '../../../../../../com/oracle/truffle/regex/AbstractConstantKeysObject.d.ts'
import type { AbstractRegexObject } from '../../../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { RegexSource } from '../../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { TruffleReadOnlyKeysArray } from '../../../../../../com/oracle/truffle/regex/util/TruffleReadOnlyKeysArray.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class OracleDBFlags extends AbstractConstantKeysObject {
    static EMPTY_INSTANCE: OracleDBFlags;
    static createNamedCaptureGroupMapInt(paramnamedCaptureGroups: JavaMap<string, number[]>): AbstractRegexObject;
    static createNamedCaptureGroupMapListInt(paramnamedCaptureGroups: JavaMap<string, number[]>): AbstractRegexObject;
    static parseFlags(paramsource: RegexSource): OracleDBFlags;
    private constructor(value: number)
    // private value: number;
    equals(other: Object | null): boolean;
    getKeys(): TruffleReadOnlyKeysArray;
    // private hasFlag(flag: number): boolean;
    hashCode(): number;
    isDotAll(): boolean;
    isForceAccentAndCaseSensitive(): boolean;
    isIgnoreCase(): boolean;
    isIgnoreWhitespace(): boolean;
    isMemberReadableImpl(symbol: string): boolean;
    isMultiline(): boolean;
    readMemberImpl(symbol: string): Object;
    toDisplayString(allowSideEffects: boolean): Object;
    toString(): string;
}