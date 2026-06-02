import type { Serializable } from '../../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ConflictTimer } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ConflictTimer.d.ts'
import type { DataStructureFactory } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/DataStructureFactory.d.ts'
import type { Solver } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/Solver.d.ts'
export abstract class ConflictTimerAdapter extends Object implements Serializable, ConflictTimer {
    constructor(arg0: Solver<DataStructureFactory>, arg1: number)
    // private bound: number;
    // private counter: number;
    readonly solver: Solver<DataStructureFactory>;
    bound(): number;
    getSolver(): Solver<DataStructureFactory>;
    newConflict(): void;
    reset(): void;
    run(): void;
}