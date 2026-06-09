import type { Complex } from '../../../../../com/seedfinding/mcmath/arithmetic/Complex.d.ts'
import type { CMatrix$Generator } from '../../../../../com/seedfinding/mcmath/component/matrix/CMatrix$Generator.d.ts'
import type { CVector$Mapper } from '../../../../../com/seedfinding/mcmath/component/vector/CVector$Mapper.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CMatrix$Mapper extends Object {
    asGenerator(): (param0: number, param1: number) => com.seedfinding.mcmath.arithmetic.Complex;
    forColumn(arg0: number): (param0: number, param1: Complex) => com.seedfinding.mcmath.arithmetic.Complex;
    forRow(arg0: number): (param0: number, param1: Complex) => com.seedfinding.mcmath.arithmetic.Complex;
    getNewValue(arg0: number, arg1: number, arg2: Complex): Complex;
}