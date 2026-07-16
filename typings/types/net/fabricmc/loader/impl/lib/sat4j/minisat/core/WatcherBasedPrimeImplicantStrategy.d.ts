import type { Comparator } from '../../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DataStructureFactory } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/DataStructureFactory.d.ts'
import type { PrimeImplicantStrategy } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/PrimeImplicantStrategy.d.ts'
import type { Solver } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/Solver.d.ts'
import type { Constr } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
import type { MandatoryLiteralListener } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/MandatoryLiteralListener.d.ts'
export class WatcherBasedPrimeImplicantStrategy extends Object implements PrimeImplicantStrategy, MandatoryLiteralListener {
    constructor()
    constructor(arg0: (param0: number, param1: number) => number)
    // private comparator: (param0: number, param1: number) => number;
    // private prime: number[];
    compute(arg0: Solver<DataStructureFactory>): number[];
    // private fullModel(arg0: Solver<DataStructureFactory>): number[];
    getPrimeImplicantAsArrayWithHoles(): number[];
    isMandatory(arg0: number): void;
    reduceClausesContainingTheNegationOfPI(arg0: Solver<DataStructureFactory>, arg1: number): Constr;
}