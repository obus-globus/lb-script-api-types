import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { BigInteger } from '../../../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ISolver } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/ISolver.d.ts'
import type { IVec } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVec.d.ts'
import type { IVecInt } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
import type { RandomAccessModel } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/RandomAccessModel.d.ts'
export class ObjectiveFunction extends Object implements Serializable {
    constructor()
    constructor(arg0: IVecInt, arg1: IVec<BigInteger>)
    readonly coeffs: IVec<BigInteger>;
    // private correction: BigInteger;
    readonly correctionFactor: BigInteger;
    readonly vars: IVecInt;
    calculateDegree(arg0: RandomAccessModel): BigInteger;
    calculateDegreeImplicant(arg0: ISolver): BigInteger;
    equals(arg0: Object | null): boolean;
    getCoeffs(): IVec<BigInteger>;
    getCorrectionFactor(): BigInteger;
    getCorrectionOffset(): BigInteger;
    getVars(): IVecInt;
    hashCode(): number;
    toMap(): JavaMap<number, BigInteger>;
    toString(): string;
    // private varInModel(arg0: number, arg1: RandomAccessModel): boolean;
}