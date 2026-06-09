import type { Real } from '../../../../../com/seedfinding/mcmath/arithmetic/Real.d.ts'
import type { RMatrix$Generator } from '../../../../../com/seedfinding/mcmath/component/matrix/RMatrix$Generator.d.ts'
import type { RVector$Mapper } from '../../../../../com/seedfinding/mcmath/component/vector/RVector$Mapper.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface RMatrix$Mapper extends Object {
    asGenerator(): (param0: number, param1: number) => com.seedfinding.mcmath.arithmetic.Real;
    forColumn(arg0: number): (param0: number, param1: Real) => com.seedfinding.mcmath.arithmetic.Real;
    forRow(arg0: number): (param0: number, param1: Real) => com.seedfinding.mcmath.arithmetic.Real;
    getNewValue(arg0: number, arg1: number, arg2: Real): Real;
}