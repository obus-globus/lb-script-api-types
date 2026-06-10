import type { Complex } from '../../../../../com/seedfinding/mcmath/arithmetic/Complex.d.ts'
import type { CMatrix$Mapper } from '../../../../../com/seedfinding/mcmath/component/matrix/CMatrix$Mapper.d.ts'
import type { CVector$Generator } from '../../../../../com/seedfinding/mcmath/component/vector/CVector$Generator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CMatrix$Generator extends Object {
    asMapper(): (param0: number, param1: number, param2: Complex) => Complex;
    forColumn(arg0: number): (param0: number) => Complex;
    forRow(arg0: number): (param0: number) => Complex;
    getValue(arg0: number, arg1: number): Complex;
}