import type { BigInteger } from '../../../../../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { IVec } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVec.d.ts'
import type { IVecInt } from '../../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
export class InternalMapPBStructure extends Object {
    constructor(arg0: number)
    // private allLits: IVecInt;
    // private coefs: IVec<BigInteger>;
    // private lits: IVecInt;
    changeCoef(arg0: number, arg1: BigInteger): void;
    containsKey(arg0: number): boolean;
    copyCoefs(arg0: BigInteger[]): void;
    copyLits(arg0: number[]): void;
    get(arg0: number): BigInteger;
    getCoef(arg0: number): BigInteger;
    getLit(arg0: number): number;
    put(arg0: number, arg1: BigInteger): void;
    remove(arg0: number): void;
    size(): number;
}