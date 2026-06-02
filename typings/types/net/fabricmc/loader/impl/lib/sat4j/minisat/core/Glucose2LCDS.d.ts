import type { ConflictTimer } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ConflictTimer.d.ts'
import type { DataStructureFactory } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/DataStructureFactory.d.ts'
import type { GlucoseLCDS } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/GlucoseLCDS.d.ts'
import type { Solver } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/Solver.d.ts'
import type { Constr } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
export class Glucose2LCDS<D extends DataStructureFactory> extends GlucoseLCDS<D> {
    constructor(arg0: Solver<D>, arg1: ConflictTimer)
    onPropagation(arg0: Constr, arg1: number): void;
    toString(): string;
}