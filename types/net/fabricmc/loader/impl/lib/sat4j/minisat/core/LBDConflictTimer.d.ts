import type { ConflictTimerAdapter } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ConflictTimerAdapter.d.ts'
import type { DataStructureFactory } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/DataStructureFactory.d.ts'
import type { Solver } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/Solver.d.ts'
export class LBDConflictTimer extends ConflictTimerAdapter {
    constructor(arg0: Solver<DataStructureFactory>, arg1: number)
    // private nbconflict: number;
    // private nextbound: number;
    reset(): void;
    run(): void;
    toString(): string;
}