import type { Real } from '../../../../../com/seedfinding/mcmath/arithmetic/Real.d.ts'
import type { RMatrix$Mapper } from '../../../../../com/seedfinding/mcmath/component/matrix/RMatrix$Mapper.d.ts'
import type { RVector$Generator } from '../../../../../com/seedfinding/mcmath/component/vector/RVector$Generator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface RMatrix$Generator extends Object {
    asMapper(): (param0: number, param1: number, param2: Real) => com.seedfinding.mcmath.arithmetic.Real;
    forColumn(arg0: number): (param0: number) => com.seedfinding.mcmath.arithmetic.Real;
    forRow(arg0: number): (param0: number) => com.seedfinding.mcmath.arithmetic.Real;
    getValue(arg0: number, arg1: number): Real;
}