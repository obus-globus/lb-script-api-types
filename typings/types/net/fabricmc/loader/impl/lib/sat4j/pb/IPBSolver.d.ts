import type { PrintWriter } from '../../../../../../../java/io/PrintWriter.d.ts'
import type { BigInteger } from '../../../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ObjectiveFunction } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/ObjectiveFunction.d.ts'
import type { IConstr } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IConstr.d.ts'
import type { ISolver } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/ISolver.d.ts'
import type { IVec } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVec.d.ts'
import type { IVecInt } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
export interface IPBSolver extends Object, ISolver{
    addAtLeast(arg0: IVecInt, arg1: IVecInt, arg2: number): IConstr;
    addAtMost(arg0: IVecInt, arg1: IVecInt, arg2: number): IConstr;
    addAtMost(arg0: IVecInt, arg1: number): IConstr;
    addClause(arg0: IVecInt): IConstr;
    addPseudoBoolean(arg0: IVecInt, arg1: IVec<BigInteger>, arg2: boolean, arg3: BigInteger): IConstr;
    createBlockingClauseForCurrentModel(): IVecInt;
    expireTimeout(): void;
    getLogPrefix(): string;
    getObjectiveFunction(): ObjectiveFunction;
    isSatisfiable(): boolean;
    isSatisfiable(arg0: IVecInt): boolean;
    isSatisfiable(arg0: IVecInt, arg1: boolean): boolean;
    isVerbose(): boolean;
    model(arg0: number): boolean;
    nVars(): number;
    nextFreeVarId(arg0: boolean): number;
    primeImplicant(arg0: number): boolean;
    printStat(arg0: PrintWriter, arg1: string): void;
    removeConstr(arg0: IConstr): boolean;
    removeSubsumedConstr(arg0: IConstr): boolean;
    reset(): void;
    setObjectiveFunction(arg0: ObjectiveFunction): void;
    setTimeout(arg0: number): void;
    unsatExplanation(): IVecInt;
}