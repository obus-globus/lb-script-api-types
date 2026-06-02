import type { ValueProfile } from '../../../../com/oracle/truffle/api/profiles/ValueProfile.d.ts'
import type { AbstractConstantKeysObject } from '../../../../com/oracle/truffle/regex/AbstractConstantKeysObject.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractConstantKeysObject$IsMemberReadable extends Object {
    static cacheEquals(paramreceiver: AbstractConstantKeysObject, paramsymbol: string, paramcachedSymbol: string, paramcachedClass: Class<Object>, paramresult: boolean): boolean;
    static cacheIdentity(paramreceiver: AbstractConstantKeysObject, paramsymbol: string, paramcachedSymbol: string, paramcachedClass: Class<Object>, paramresult: boolean): boolean;
    static isReadable(paramreceiver: AbstractConstantKeysObject, paramsymbol: string, paramclassProfile: ValueProfile): boolean;
    constructor()
}