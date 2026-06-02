import type { Complex } from '../../../../../com/seedfinding/mcmath/arithmetic/Complex.d.ts'
import type { CVector$Generator } from '../../../../../com/seedfinding/mcmath/component/vector/CVector$Generator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CVector$Mapper extends Object{
    asGenerator(): (param0: number) => com.seedfinding.mcmath.arithmetic.Complex;
    getNewValue(arg0: number, arg1: Complex): Complex;
}