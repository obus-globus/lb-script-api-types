import type { PrintWriter } from '../../../../../../../../java/io/PrintWriter.d.ts'
import type { Serializable } from '../../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Heap } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/Heap.d.ts'
import type { ILits } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ILits.d.ts'
import type { IOrder } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/IOrder.d.ts'
import type { IPhaseSelectionStrategy } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/IPhaseSelectionStrategy.d.ts'
export class VarOrderHeap extends Object implements Serializable, IOrder {
    constructor()
    constructor(arg0: IPhaseSelectionStrategy)
    // private activity: number[];
    // private heap: Heap;
    lits: ILits;
    // private nullchoice: number;
    // private phaseStrategy: IPhaseSelectionStrategy;
    readonly varDecay: number;
    // private varInc: number;
    assignLiteral(arg0: number): void;
    createHeap(arg0: number[]): Heap;
    init(): void;
    printStat(arg0: PrintWriter, arg1: string): void;
    select(): number;
    setLits(arg0: ILits): void;
    setVarDecay(arg0: number): void;
    toString(): string;
    undo(arg0: number): void;
    updateActivity(arg0: number, arg1: number): void;
    updateVar(arg0: number): void;
    updateVar(arg0: number, arg1: number): void;
    updateVarAtDecisionLevel(arg0: number): void;
    varDecayActivity(): void;
    // private varRescaleActivity(): void;
}