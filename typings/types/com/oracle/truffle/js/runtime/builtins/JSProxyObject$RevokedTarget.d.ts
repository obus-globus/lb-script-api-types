import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSProxyObject$RevokedTarget extends Object implements TruffleObject {
    constructor(isCallable: boolean, isConstructor: boolean)
    // private isCallable: boolean;
    // private isConstructor: boolean;
    execute(args: Object[]): Object;
    getLanguageId(): string;
    hasLanguageId(): boolean;
    instantiate(args: Object[]): Object;
    isExecutable(): boolean;
    isInstantiable(): boolean;
    toDisplayString(allowSideEffects: boolean): TruffleString;
}