import type { DataStructureFactory } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/DataStructureFactory.d.ts'
import type { IOrder } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/IOrder.d.ts'
import type { ISimplifier } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ISimplifier.d.ts'
import type { LearningStrategy } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/LearningStrategy.d.ts'
import type { RestartStrategy } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/RestartStrategy.d.ts'
import type { SearchParams } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/SearchParams.d.ts'
import type { ILogAble } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/ILogAble.d.ts'
export class Solver<D extends DataStructureFactory>{
    static NO_SIMPLIFICATION: ISimplifier;
    constructor(arg0: LearningStrategy<D>, arg1: D, arg2: IOrder, arg3: RestartStrategy)
    constructor(arg0: LearningStrategy<D>, arg1: D, arg2: SearchParams, arg3: IOrder, arg4: RestartStrategy)
    constructor(arg0: LearningStrategy<D>, arg1: D, arg2: SearchParams, arg3: IOrder, arg4: RestartStrategy, arg5: ILogAble)
}