import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { AbstractRegexObject } from '../../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { TruffleOrderedReadOnlyKeysArray } from '../../../../../com/oracle/truffle/regex/util/TruffleOrderedReadOnlyKeysArray.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TruffleSmallReadOnlyStringToIntMap extends AbstractRegexObject {
    static MAX_SIZE: number;
    static canCreate(parammap: JavaMap<string, number[]>): boolean;
    static create(paramargMap: JavaMap<string, number[]>): TruffleSmallReadOnlyStringToIntMap;
    static createNamedCaptureGroupMapInt(paramnamedCaptureGroups: JavaMap<string, number[]>): AbstractRegexObject;
    static createNamedCaptureGroupMapListInt(paramnamedCaptureGroups: JavaMap<string, number[]>): AbstractRegexObject;
    private constructor(keys: string[], map: string[])
    // private keys: TruffleOrderedReadOnlyKeysArray;
    // private map: string[];
    getMembers(includeInternal: boolean): Object;
    hasMembers(): boolean;
    isMemberReadable(symbol: string): boolean;
    readMember(symbol: string): number;
    toString(): string;
}