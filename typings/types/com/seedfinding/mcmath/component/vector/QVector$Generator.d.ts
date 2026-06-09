import type { Rational } from '../../../../../com/seedfinding/mcmath/arithmetic/Rational.d.ts'
import type { QVector$Mapper } from '../../../../../com/seedfinding/mcmath/component/vector/QVector$Mapper.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface QVector$Generator extends Object {
    asMapper(): (param0: number, param1: Rational) => com.seedfinding.mcmath.arithmetic.Rational;
    getValue(arg0: number): Rational;
}