import type { IntegerType } from '../../../../../com/sun/jna/IntegerType.d.ts'
import type { OaIdl$DISPID } from '../../../../../com/sun/jna/platform/win32/OaIdl$DISPID.d.ts'
export class OaIdl$MEMBERID extends OaIdl$DISPID {
    static SIZE: number;
    static compare<T extends IntegerType>(paramarg0: T, paramarg1: T): number;
    static compare(paramarg0: number, paramarg1: number): number;
    static compare(paramarg0: IntegerType, paramarg1: number): number;
    constructor()
    constructor(arg0: number)
}