import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { TruffleObject } from '../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractRegexObject extends Object implements TruffleObject {
    static createNamedCaptureGroupMapInt(paramnamedCaptureGroups: { [key: string]: number[] }): AbstractRegexObject;
    static createNamedCaptureGroupMapListInt(paramnamedCaptureGroups: { [key: string]: number[] }): AbstractRegexObject;
    constructor()
    getLanguage(): Class<TruffleLanguage<Object>>;
    hasLanguage(): boolean;
    toDisplayString(allowSideEffects: boolean): Object;
}