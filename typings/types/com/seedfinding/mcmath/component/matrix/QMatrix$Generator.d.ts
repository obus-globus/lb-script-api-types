import type { Rational } from '../../../../../com/seedfinding/mcmath/arithmetic/Rational.d.ts'
import type { QMatrix$Mapper } from '../../../../../com/seedfinding/mcmath/component/matrix/QMatrix$Mapper.d.ts'
import type { QVector$Generator } from '../../../../../com/seedfinding/mcmath/component/vector/QVector$Generator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface QMatrix$Generator extends Object {
    asMapper(): (param0: number, param1: number, param2: Rational) => Rational;
    forColumn(arg0: number): (param0: number) => Rational;
    forRow(arg0: number): (param0: number) => Rational;
    getValue(arg0: number, arg1: number): Rational;
}