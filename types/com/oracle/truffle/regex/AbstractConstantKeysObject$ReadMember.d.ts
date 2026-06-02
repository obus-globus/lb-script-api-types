import type { ValueProfile } from '../../../../com/oracle/truffle/api/profiles/ValueProfile.d.ts'
import type { AbstractConstantKeysObject } from '../../../../com/oracle/truffle/regex/AbstractConstantKeysObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractConstantKeysObject$ReadMember extends Object {
    static read(paramreceiver: AbstractConstantKeysObject, paramsymbol: string, paramclassProfile: ValueProfile): Object;
    static readEquals(paramreceiver: AbstractConstantKeysObject, paramsymbol: string, paramcachedSymbol: string, paramclassProfile: ValueProfile): Object;
    static readIdentity(paramreceiver: AbstractConstantKeysObject, paramsymbol: string, paramcachedSymbol: string, paramclassProfile: ValueProfile): Object;
    constructor()
}