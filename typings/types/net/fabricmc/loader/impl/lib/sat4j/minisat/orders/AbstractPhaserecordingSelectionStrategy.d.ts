import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { IPhaseSelectionStrategy } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/IPhaseSelectionStrategy.d.ts'
export abstract class AbstractPhaserecordingSelectionStrategy extends Object implements IPhaseSelectionStrategy {
    constructor()
    // private phase: number[];
    assignLiteral(arg0: number): void;
    init(arg0: number): void;
    init(arg0: number, arg1: number): void;
    select(arg0: number): number;
    updateVar(arg0: number): void;
    updateVarAtDecisionLevel(arg0: number): void;
}