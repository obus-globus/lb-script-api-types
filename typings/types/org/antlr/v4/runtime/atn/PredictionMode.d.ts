import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { ATNState } from '../../../../../org/antlr/v4/runtime/atn/ATNState.d.ts'
export class PredictionMode extends Enum<PredictionMode> {
    static LL: PredictionMode;
    static LL_EXACT_AMBIG_DETECTION: PredictionMode;
    static SLL: PredictionMode;
    static allConfigsInRuleStopStates(paramarg0: (Object | null)[]): boolean;
    static allSubsetsConflict(paramarg0: BitSet[]): boolean;
    static allSubsetsEqual(paramarg0: BitSet[]): boolean;
    static getAlts(paramarg0: BitSet[]): BitSet;
    static getAlts(paramarg0: (Object | null)[]): BitSet;
    static getConflictingAltSubsets(paramarg0: (Object | null)[]): BitSet[];
    static getSingleViableAlt(paramarg0: BitSet[]): number;
    static getStateToAltMap(paramarg0: (Object | null)[]): Map<ATNState, BitSet>;
    static getUniqueAlt(paramarg0: BitSet[]): number;
    static hasConfigInRuleStopState(paramarg0: (Object | null)[]): boolean;
    static hasConflictingAltSet(paramarg0: BitSet[]): boolean;
    static hasNonConflictingAltSet(paramarg0: BitSet[]): boolean;
    static hasSLLConflictTerminatingPrediction(paramarg0: PredictionMode, paramarg1: (Object | null)[]): boolean;
    static hasStateAssociatedWithOneAlt(paramarg0: (Object | null)[]): boolean;
    static resolvesToJustOneViableAlt(paramarg0: BitSet[]): number;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PredictionMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "SLL" | "LL" | "LL_EXACT_AMBIG_DETECTION";
}