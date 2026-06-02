import type { AbstractRegexObject } from '../../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TruffleReadOnlyMap extends AbstractRegexObject {
    static createNamedCaptureGroupMapInt(paramnamedCaptureGroups: { [key: string]: Object | null }): AbstractRegexObject;
    static createNamedCaptureGroupMapListInt(paramnamedCaptureGroups: { [key: string]: Object | null }): AbstractRegexObject;
    constructor(map: { [key: string]: Object | null })
    // private map: { [key: string]: Object | null };
    getMembers(includeInternal: boolean): Object;
    hasMembers(): boolean;
    isMemberReadable(symbol: string): boolean;
    readMember(symbol: string): Object;
    toString(): string;
}