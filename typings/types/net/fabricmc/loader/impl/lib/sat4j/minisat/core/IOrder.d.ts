import type { PrintWriter } from '../../../../../../../../java/io/PrintWriter.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ILits } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ILits.d.ts'
export interface IOrder extends Object{
    assignLiteral(arg0: number): void;
    init(): void;
    printStat(arg0: PrintWriter, arg1: string): void;
    select(): number;
    setLits(arg0: ILits): void;
    setVarDecay(arg0: number): void;
    undo(arg0: number): void;
    updateVar(arg0: number): void;
    updateVarAtDecisionLevel(arg0: number): void;
    varDecayActivity(): void;
}