import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { IConstr } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IConstr.d.ts'
import type { ISolver } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/ISolver.d.ts'
import type { IVecInt } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
import type { AbstractClauseSelectorSolver } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/tools/AbstractClauseSelectorSolver.d.ts'
export class FullClauseSelectorSolver<T extends ISolver> extends AbstractClauseSelectorSolver<T> {
    constructor(arg0: T, arg1: boolean)
    readonly constrs: JavaMap<number, IConstr>;
    readonly lastClause: IVecInt;
    readonly lastConstr: IConstr;
    // private skipDuplicatedEntries: boolean;
    addClause(arg0: IVecInt): IConstr;
    addControlableClause(arg0: IVecInt): IConstr;
    getAddedVars(): number[];
    getConstrs(): JavaMap<number, IConstr>;
    getLastClause(): IVecInt;
    getLastConstr(): IConstr;
    model(): number[];
    model(arg0: number): boolean;
    setLastConstr(arg0: IConstr): void;
}