import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DependencyHelper } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/tools/DependencyHelper.d.ts'
import type { IConstr } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IConstr.d.ts'
import type { IVec } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVec.d.ts'
export class ImplicationNamer<T extends Object | number | string | boolean, C extends Object | number | string | boolean> extends Object {
    constructor(arg0: DependencyHelper<T, C>, arg1: IVec<IConstr>)
    // private helper: DependencyHelper<T, C>;
    // private toName: IVec<IConstr>;
    named(arg0: C): void;
}