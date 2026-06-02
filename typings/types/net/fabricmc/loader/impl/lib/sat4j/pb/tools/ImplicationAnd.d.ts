import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DependencyHelper } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/tools/DependencyHelper.d.ts'
import type { IConstr } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IConstr.d.ts'
import type { IVec } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVec.d.ts'
import type { IVecInt } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
export class ImplicationAnd<T extends Object | number | string | boolean, C extends Object | number | string | boolean> extends Object {
    constructor(arg0: DependencyHelper<T, C>, arg1: IVecInt)
    // private clause: IVecInt;
    // private helper: DependencyHelper<T, C>;
    // private toName: IVec<IConstr>;
    andNot(arg0: T): ImplicationAnd<T, C>;
    named(arg0: C): void;
}