import type { PrintWriter } from '../../../../../../../../java/io/PrintWriter.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ILits } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ILits.d.ts'
import type { IOrder } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/IOrder.d.ts'
import type { ObjectiveFunction } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/ObjectiveFunction.d.ts'
export interface IOrderObjective extends Object, IOrder{
    assignLiteral(arg0: number): void;
    init(): void;
    printStat(arg0: PrintWriter, arg1: string): void;
    select(): number;
    setLits(arg0: ILits): void;
    setObjectiveFunction(arg0: ObjectiveFunction): void;
    setVarDecay(arg0: number): void;
    undo(arg0: number): void;
    updateVar(arg0: number): void;
    updateVarAtDecisionLevel(arg0: number): void;
    varDecayActivity(): void;
}