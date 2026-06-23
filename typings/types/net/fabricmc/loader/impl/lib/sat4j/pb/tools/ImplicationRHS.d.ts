import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DependencyHelper } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/tools/DependencyHelper.d.ts'
import type { ImplicationAnd } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/tools/ImplicationAnd.d.ts'
import type { ImplicationNamer } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/tools/ImplicationNamer.d.ts'
import type { IConstr } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IConstr.d.ts'
import type { IVec } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVec.d.ts'
import type { IVecInt } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
export class ImplicationRHS<T extends unknown, C extends unknown> extends Object {
    constructor(arg0: DependencyHelper<T, C>, arg1: IVecInt)
    // private clause: IVecInt;
    // private helper: DependencyHelper<T, C>;
    // private toName: IVec<IConstr>;
    implies(arg0: T[]): ImplicationNamer<T, C>;
    impliesNot(arg0: T): ImplicationAnd<T, C>;
}