import type { Serializable } from '../../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ISolver } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/ISolver.d.ts'
import type { IVecInt } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
export interface MinimizationStrategy extends Serializable, Object{
    explain(arg0: ISolver, arg1: { [key: number]: Object | null }, arg2: IVecInt): IVecInt;
}