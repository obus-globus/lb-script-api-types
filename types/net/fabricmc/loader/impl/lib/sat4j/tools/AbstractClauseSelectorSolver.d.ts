import type { ISolver } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/ISolver.d.ts'
import type { IVecInt } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
import type { AbstractClauseSelectorSolver$SelectorState } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/tools/AbstractClauseSelectorSolver$SelectorState.d.ts'
import type { SolverDecorator } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/tools/SolverDecorator.d.ts'
export abstract class AbstractClauseSelectorSolver<T extends ISolver> extends SolverDecorator<T> {
    constructor(arg0: T)
    // private external: AbstractClauseSelectorSolver$SelectorState;
    // private internal: AbstractClauseSelectorSolver$SelectorState;
    // private lastCreatedVar: number;
    // private pooledVarId: boolean;
    // private selectedState: AbstractClauseSelectorSolver$SelectorState;
    createNewVar(arg0: IVecInt): number;
    discardLastestVar(): void;
    getAddedVars(): E[];
    isSatisfiable(): boolean;
    isSatisfiable(arg0: IVecInt): boolean;
    isSatisfiable(arg0: IVecInt, arg1: boolean): boolean;
}