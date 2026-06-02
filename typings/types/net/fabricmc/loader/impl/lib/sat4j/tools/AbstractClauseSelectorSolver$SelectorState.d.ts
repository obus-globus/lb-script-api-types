import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { IVecInt } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
export interface AbstractClauseSelectorSolver$SelectorState extends Object{
    isSatisfiable(): boolean;
    isSatisfiable(arg0: IVecInt): boolean;
    isSatisfiable(arg0: IVecInt, arg1: boolean): boolean;
}