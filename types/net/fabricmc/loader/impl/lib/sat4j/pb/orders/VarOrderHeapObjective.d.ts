import type { IPhaseSelectionStrategy } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/IPhaseSelectionStrategy.d.ts'
import type { VarOrderHeap } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/orders/VarOrderHeap.d.ts'
import type { ObjectiveFunction } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/ObjectiveFunction.d.ts'
import type { IOrderObjective } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/orders/IOrderObjective.d.ts'
export class VarOrderHeapObjective extends VarOrderHeap implements IOrderObjective {
    constructor()
    constructor(arg0: IPhaseSelectionStrategy)
    // private obj: ObjectiveFunction;
    init(): void;
    setObjectiveFunction(arg0: ObjectiveFunction): void;
    toString(): string;
}