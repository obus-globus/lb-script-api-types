import type { ConflictTimerAdapter } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ConflictTimerAdapter.d.ts'
import type { DataStructureFactory } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/DataStructureFactory.d.ts'
import type { Solver } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/Solver.d.ts'
export class MemoryBasedConflictTimer extends ConflictTimerAdapter {
    constructor(arg0: Solver<DataStructureFactory>, arg1: number)
    // private memorybound: number;
    // private getMemoryBound(): number;
    run(): void;
    toString(): string;
}