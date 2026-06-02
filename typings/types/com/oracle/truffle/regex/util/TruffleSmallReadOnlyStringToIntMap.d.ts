import type { AbstractRegexObject } from '../../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { TruffleOrderedReadOnlyKeysArray } from '../../../../../com/oracle/truffle/regex/util/TruffleOrderedReadOnlyKeysArray.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TruffleSmallReadOnlyStringToIntMap extends AbstractRegexObject {
    static MAX_SIZE: number;
    static canCreate(parammap: { [key: string]: Object | null }): boolean;
    static create(paramargMap: { [key: string]: Object | null }): TruffleSmallReadOnlyStringToIntMap;
    static createNamedCaptureGroupMapInt(paramnamedCaptureGroups: { [key: string]: Object | null }): AbstractRegexObject;
    static createNamedCaptureGroupMapListInt(paramnamedCaptureGroups: { [key: string]: Object | null }): AbstractRegexObject;
    private constructor(keys: string[], map: string[])
    // private keys: TruffleOrderedReadOnlyKeysArray;
    // private map: string[];
    getMembers(includeInternal: boolean): Object;
    hasMembers(): boolean;
    isMemberReadable(symbol: string): boolean;
    readMember(symbol: string): number;
    toString(): string;
}