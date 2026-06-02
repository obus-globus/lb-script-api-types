import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { IOrder } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/IOrder.d.ts'
import type { ObjectiveFunction } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/ObjectiveFunction.d.ts'
export interface IOrderObjective extends Object, IOrder{
    setObjectiveFunction(arg0: ObjectiveFunction): void;
}