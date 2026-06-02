import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DataStructureFactory } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/DataStructureFactory.d.ts'
import type { Solver } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/Solver.d.ts'
export interface PrimeImplicantStrategy extends Object{
    compute(arg0: Solver<DataStructureFactory>): number[];
    getPrimeImplicantAsArrayWithHoles(): number[];
}