import type { BigInteger } from '../../../../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ILits } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ILits.d.ts'
import type { Constr } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
import type { UnitPropagationListener } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/UnitPropagationListener.d.ts'
export interface IPBConstructor extends Object{
    constructPB(arg0: UnitPropagationListener, arg1: ILits, arg2: number[], arg3: BigInteger[], arg4: BigInteger, arg5: BigInteger): Constr;
}