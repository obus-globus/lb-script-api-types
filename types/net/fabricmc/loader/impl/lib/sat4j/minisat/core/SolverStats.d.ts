import type { PrintWriter } from '../../../../../../../../java/io/PrintWriter.d.ts'
import type { Serializable } from '../../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class SolverStats extends Object implements Serializable {
    constructor()
    // private changedreason: number;
    readonly conflicts: number;
    // private decisions: number;
    // private ignoredclauses: number;
    // private importedUnits: number;
    // private inspects: number;
    // private learnedbinaryclauses: number;
    // private learnedclauses: number;
    // private learnedliterals: number;
    // private learnedternaryclauses: number;
    readonly propagations: number;
    // private reduceddb: number;
    // private reducedliterals: number;
    // private rootSimplifications: number;
    // private shortcuts: number;
    readonly starts: number;
    // private updateLBD: number;
    getConflicts(): number;
    getPropagations(): number;
    getStarts(): number;
    incConflicts(): void;
    incDecisions(): void;
    incImportedUnits(arg0: number): void;
    incInspects(): void;
    incLearnedbinaryclauses(): void;
    incLearnedclauses(): void;
    incLearnedliterals(): void;
    incLearnedternaryclauses(): void;
    incPropagations(): void;
    incReduceddb(): void;
    incReducedliterals(arg0: number): void;
    incRootSimplifications(): void;
    incStarts(): void;
    incUpdateLBD(): void;
    printStat(arg0: PrintWriter, arg1: string): void;
    reset(): void;
}