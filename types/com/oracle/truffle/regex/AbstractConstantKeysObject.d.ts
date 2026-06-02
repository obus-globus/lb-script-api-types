import type { AbstractRegexObject } from '../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { TruffleReadOnlyKeysArray } from '../../../../com/oracle/truffle/regex/util/TruffleReadOnlyKeysArray.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractConstantKeysObject extends AbstractRegexObject {
    static createNamedCaptureGroupMapInt(paramnamedCaptureGroups: { [key: string]: Object | null }): AbstractRegexObject;
    static createNamedCaptureGroupMapListInt(paramnamedCaptureGroups: { [key: string]: Object | null }): AbstractRegexObject;
    constructor()
    getKeys(): TruffleReadOnlyKeysArray;
    getMembers(includeInternal: boolean): Object;
    hasMembers(): boolean;
    isMemberReadableImpl(symbol: string): boolean;
    readMemberImpl(symbol: string): Object;
}