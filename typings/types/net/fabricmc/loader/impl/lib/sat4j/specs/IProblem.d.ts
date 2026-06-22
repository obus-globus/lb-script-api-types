import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { IVecInt } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
import type { RandomAccessModel } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/RandomAccessModel.d.ts'
export interface IProblem extends Object, RandomAccessModel{
    isSatisfiable(): boolean;
    isSatisfiable(arg0: IVecInt): boolean;
    isSatisfiable(arg0: IVecInt, arg1: boolean): boolean;
    model(): number[];
    model(arg0: number): boolean;
    nVars(): number;
    primeImplicant(): number[];
    primeImplicant(arg0: number): boolean;
}