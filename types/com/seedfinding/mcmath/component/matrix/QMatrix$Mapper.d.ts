import type { Rational } from '../../../../../com/seedfinding/mcmath/arithmetic/Rational.d.ts'
import type { QMatrix$Generator } from '../../../../../com/seedfinding/mcmath/component/matrix/QMatrix$Generator.d.ts'
import type { QVector$Mapper } from '../../../../../com/seedfinding/mcmath/component/vector/QVector$Mapper.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface QMatrix$Mapper extends Object{
    asGenerator(): (param0: number, param1: number) => com.seedfinding.mcmath.arithmetic.Rational;
    forColumn(arg0: number): (param0: number, param1: Rational) => com.seedfinding.mcmath.arithmetic.Rational;
    forRow(arg0: number): (param0: number, param1: Rational) => com.seedfinding.mcmath.arithmetic.Rational;
    getNewValue(arg0: number, arg1: number, arg2: Rational): Rational;
}