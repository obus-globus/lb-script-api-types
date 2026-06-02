import type { Real } from '../../../../../com/seedfinding/mcmath/arithmetic/Real.d.ts'
import type { RVector$Mapper } from '../../../../../com/seedfinding/mcmath/component/vector/RVector$Mapper.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface RVector$Generator extends Object{
    asMapper(): (param0: number, param1: Real) => com.seedfinding.mcmath.arithmetic.Real;
    getValue(arg0: number): Real;
}