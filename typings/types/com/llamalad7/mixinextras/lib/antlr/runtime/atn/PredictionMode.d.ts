import type { ATNState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNState.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { BitSet } from '../../../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class PredictionMode extends Enum<PredictionMode> {
    static LL: PredictionMode;
    static LL_EXACT_AMBIG_DETECTION: PredictionMode;
    static SLL: PredictionMode;
    static allConfigsInRuleStopStates(paramarg0: (Object | null)[]): boolean;
    static allSubsetsConflict(paramarg0: E[]): boolean;
    static allSubsetsEqual(paramarg0: E[]): boolean;
    static getAlts(paramarg0: E[]): BitSet;
    static getConflictingAltSubsets(paramarg0: (Object | null)[]): E[];
    static getSingleViableAlt(paramarg0: E[]): number;
    static getStateToAltMap(paramarg0: (Object | null)[]): Map<ATNState, BitSet>;
    static getUniqueAlt(paramarg0: E[]): number;
    static hasConfigInRuleStopState(paramarg0: (Object | null)[]): boolean;
    static hasConflictingAltSet(paramarg0: E[]): boolean;
    static hasNonConflictingAltSet(paramarg0: E[]): boolean;
    static hasSLLConflictTerminatingPrediction(paramarg0: PredictionMode, paramarg1: (Object | null)[]): boolean;
    static hasStateAssociatedWithOneAlt(paramarg0: (Object | null)[]): boolean;
    static resolvesToJustOneViableAlt(paramarg0: E[]): number;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    private constructor()
}