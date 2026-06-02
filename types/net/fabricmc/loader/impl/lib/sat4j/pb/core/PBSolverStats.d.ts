import type { PrintWriter } from '../../../../../../../../java/io/PrintWriter.d.ts'
import type { BigInteger } from '../../../../../../../../java/math/BigInteger.d.ts'
import type { SolverStats } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/SolverStats.d.ts'
export class PBSolverStats extends SolverStats {
    constructor()
    // private falsifiedLiteralsRemovedFromConflict: number;
    // private falsifiedLiteralsRemovedFromReason: number;
    // private maxRemoved: BigInteger;
    // private minRemoved: BigInteger;
    // private nbRemoved: number;
    // private numberOfCP: number;
    readonly numberOfDerivationSteps: number;
    // private numberOfEasyRoundingOperations: number;
    // private numberOfEndingSkipping: number;
    // private numberOfInternalSkipping: number;
    // private numberOfLearnedConstraintsReduced: number;
    readonly numberOfReductions: number;
    // private numberOfReductionsByGCD: number;
    readonly numberOfReductionsByPower2: number;
    // private numberOfRemainingAssigned: number;
    // private numberOfRemainingUnassigned: number;
    // private numberOfResolution: number;
    // private numberOfRightShiftsForCoeffs: number;
    // private numberOfRoundingOperations: number;
    // private timeForArtithmeticOperations: number;
    getNumberOfDerivationSteps(): number;
    getNumberOfReductions(): number;
    getNumberOfReductionsByPower2(): number;
    printStat(arg0: PrintWriter, arg1: string): void;
    reset(): void;
}