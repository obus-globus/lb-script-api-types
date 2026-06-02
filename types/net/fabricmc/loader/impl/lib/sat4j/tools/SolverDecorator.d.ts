import type { PrintWriter } from '../../../../../../../java/io/PrintWriter.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { IConstr } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IConstr.d.ts'
import type { ISolver } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/ISolver.d.ts'
import type { IVecInt } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
export abstract class SolverDecorator<T extends ISolver> extends Object implements ISolver {
    constructor(arg0: T)
    // private solver: T;
    addAtMost(arg0: IVecInt, arg1: number): IConstr;
    addClause(arg0: IVecInt): IConstr;
    createBlockingClauseForCurrentModel(): IVecInt;
    decorated(): T;
    expireTimeout(): void;
    getLogPrefix(): string;
    isSatisfiable(): boolean;
    isSatisfiable(arg0: IVecInt): boolean;
    isSatisfiable(arg0: IVecInt, arg1: boolean): boolean;
    isVerbose(): boolean;
    model(): number[];
    model(arg0: number): boolean;
    modelWithInternalVariables(): number[];
    nVars(): number;
    nextFreeVarId(arg0: boolean): number;
    primeImplicant(): number[];
    primeImplicant(arg0: number): boolean;
    printStat(arg0: PrintWriter, arg1: string): void;
    removeConstr(arg0: IConstr): boolean;
    removeSubsumedConstr(arg0: IConstr): boolean;
    reset(): void;
    setTimeout(arg0: number): void;
    toString(): string;
    unsatExplanation(): IVecInt;
}