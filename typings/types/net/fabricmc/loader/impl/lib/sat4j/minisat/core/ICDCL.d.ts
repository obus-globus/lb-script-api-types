import type { PrintWriter } from '../../../../../../../../java/io/PrintWriter.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ActivityListener } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ActivityListener.d.ts'
import type { Learner } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/Learner.d.ts'
import type { Constr } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
import type { IConstr } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IConstr.d.ts'
import type { ISolver } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/ISolver.d.ts'
import type { IVecInt } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
import type { UnitPropagationListener } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/UnitPropagationListener.d.ts'
export interface ICDCL extends Object, ActivityListener, Learner, ISolver, UnitPropagationListener{
    addAtMost(arg0: IVecInt, arg1: number): IConstr;
    addClause(arg0: IVecInt): IConstr;
    createBlockingClauseForCurrentModel(): IVecInt;
    enqueue(arg0: number): boolean;
    enqueue(arg0: number, arg1: Constr): boolean;
    expireTimeout(): void;
    getLogPrefix(): string;
    getPropagationLevel(): number;
    isSatisfiable(): boolean;
    isSatisfiable(arg0: IVecInt): boolean;
    isSatisfiable(arg0: IVecInt, arg1: boolean): boolean;
    isVerbose(): boolean;
    learn(arg0: Constr): void;
    model(arg0: number): boolean;
    nVars(): number;
    nextFreeVarId(arg0: boolean): number;
    primeImplicant(arg0: number): boolean;
    printStat(arg0: PrintWriter, arg1: string): void;
    removeConstr(arg0: IConstr): boolean;
    removeSubsumedConstr(arg0: IConstr): boolean;
    reset(): void;
    setTimeout(arg0: number): void;
    unsatExplanation(): IVecInt;
    unset(arg0: number): void;
    varBumpActivity(arg0: number): void;
}