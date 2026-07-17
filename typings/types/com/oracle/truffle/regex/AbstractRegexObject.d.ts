import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { TruffleObject } from '../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractRegexObject extends Object implements TruffleObject {
    static createNamedCaptureGroupMapInt(paramnamedCaptureGroups: JavaMap<string, number[]>): AbstractRegexObject;
    static createNamedCaptureGroupMapListInt(paramnamedCaptureGroups: JavaMap<string, number[]>): AbstractRegexObject;
    constructor()
    getLanguageId(): string;
    hasLanguageId(): boolean;
    toDisplayString(allowSideEffects: boolean): Object;
}