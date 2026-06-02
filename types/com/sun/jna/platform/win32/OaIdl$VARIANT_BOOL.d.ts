import type { IntegerType } from '../../../../../com/sun/jna/IntegerType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class OaIdl$VARIANT_BOOL extends IntegerType {
    static SIZE: number;
    static compare(paramarg0: Object | null, paramarg1: Object | null): number;
    static compare(paramarg0: number, paramarg1: number): number;
    static compare(paramarg0: IntegerType, paramarg1: number): number;
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: number)
    booleanValue(): boolean;
}