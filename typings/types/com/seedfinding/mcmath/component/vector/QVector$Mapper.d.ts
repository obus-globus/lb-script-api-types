import type { Rational } from '../../../../../com/seedfinding/mcmath/arithmetic/Rational.d.ts'
import type { QVector$Generator } from '../../../../../com/seedfinding/mcmath/component/vector/QVector$Generator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface QVector$Mapper extends Object {
    asGenerator(): (param0: number) => Rational;
    getNewValue(arg0: number, arg1: Rational): Rational;
}