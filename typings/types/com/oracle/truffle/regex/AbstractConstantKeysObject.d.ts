import type { AbstractRegexObject } from '../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { TruffleReadOnlyKeysArray } from '../../../../com/oracle/truffle/regex/util/TruffleReadOnlyKeysArray.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractConstantKeysObject extends AbstractRegexObject {
    static createNamedCaptureGroupMapInt(paramnamedCaptureGroups: { [key: string]: number[] }): AbstractRegexObject;
    static createNamedCaptureGroupMapListInt(paramnamedCaptureGroups: { [key: string]: number[] }): AbstractRegexObject;
    constructor()
    getKeys(): TruffleReadOnlyKeysArray;
    getMembers(includeInternal: boolean): Object;
    hasMembers(): boolean;
    isMemberReadableImpl(symbol: string): boolean;
    readMemberImpl(symbol: string): Object;
}