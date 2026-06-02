import type { LexerActionExecutor } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/LexerActionExecutor.d.ts'
import type { DFAState$PredPrediction } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/dfa/DFAState$PredPrediction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DFAState extends Object {
    constructor()
    constructor(arg0: (Object | null)[])
    configs: (Object | null)[];
    edges: DFAState[];
    isAcceptState: boolean;
    lexerActionExecutor: LexerActionExecutor;
    predicates: DFAState$PredPrediction[];
    prediction: number;
    requiresFullContext: boolean;
    stateNumber: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}