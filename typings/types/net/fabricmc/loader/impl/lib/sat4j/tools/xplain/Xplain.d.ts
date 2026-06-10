import type { IConstr } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IConstr.d.ts'
import type { ISolver } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/ISolver.d.ts'
import type { IVecInt } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
import type { FullClauseSelectorSolver } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/tools/FullClauseSelectorSolver.d.ts'
import type { MinimizationStrategy } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/tools/xplain/MinimizationStrategy.d.ts'
export class Xplain<T extends ISolver> extends FullClauseSelectorSolver<T> {
    constructor(arg0: T)
    constructor(arg0: T, arg1: boolean)
    // private assump: IVecInt;
    // private xplainStrategy: MinimizationStrategy;
    addAtMost(arg0: IVecInt, arg1: number): IConstr;
    explain(): IConstr[];
    // private explanationKeys(): IVecInt;
    isSatisfiable(): boolean;
    isSatisfiable(arg0: IVecInt): boolean;
    isSatisfiable(arg0: IVecInt, arg1: boolean): boolean;
    removeConstr(arg0: IConstr): boolean;
    removeSubsumedConstr(arg0: IConstr): boolean;
}