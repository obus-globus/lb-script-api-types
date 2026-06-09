import type { Complex } from '../../../../../com/seedfinding/mcmath/arithmetic/Complex.d.ts'
import type { CVector$Mapper } from '../../../../../com/seedfinding/mcmath/component/vector/CVector$Mapper.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CVector$Generator extends Object {
    asMapper(): (param0: number, param1: Complex) => com.seedfinding.mcmath.arithmetic.Complex;
    getValue(arg0: number): Complex;
}