import type { TruffleLanguage } from '../../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSProxyObject$RevokedTarget extends Object implements TruffleObject {
    constructor(isCallable: boolean, isConstructor: boolean)
    // private isCallable: boolean;
    // private isConstructor: boolean;
    execute(args: Object[]): Object;
    getLanguage(): Class<TruffleLanguage<Object>>;
    hasLanguage(): boolean;
    instantiate(args: Object[]): Object;
    isExecutable(): boolean;
    isInstantiable(): boolean;
    toDisplayString(allowSideEffects: boolean): TruffleString;
}