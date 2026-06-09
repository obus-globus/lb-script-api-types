import type { Real } from '../../../../../com/seedfinding/mcmath/arithmetic/Real.d.ts'
import type { RVector$Generator } from '../../../../../com/seedfinding/mcmath/component/vector/RVector$Generator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface RVector$Mapper extends Object {
    asGenerator(): (param0: number) => com.seedfinding.mcmath.arithmetic.Real;
    getNewValue(arg0: number, arg1: Real): Real;
}