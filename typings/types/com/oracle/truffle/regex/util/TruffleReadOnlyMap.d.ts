import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { AbstractRegexObject } from '../../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TruffleReadOnlyMap extends AbstractRegexObject {
    static createNamedCaptureGroupMapInt(paramnamedCaptureGroups: JavaMap<string, number[]>): AbstractRegexObject;
    static createNamedCaptureGroupMapListInt(paramnamedCaptureGroups: JavaMap<string, number[]>): AbstractRegexObject;
    constructor(map: JavaMap<string, Object | null>)
    // private map: JavaMap<string, Object | null>;
    getMembers(includeInternal: boolean): Object;
    hasMembers(): boolean;
    isMemberReadable(symbol: string): boolean;
    readMember(symbol: string): Object;
    toString(): string;
}