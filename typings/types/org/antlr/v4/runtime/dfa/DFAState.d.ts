import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LexerActionExecutor } from '../../../../../org/antlr/v4/runtime/atn/LexerActionExecutor.d.ts'
import type { DFAState$PredPrediction } from '../../../../../org/antlr/v4/runtime/dfa/DFAState$PredPrediction.d.ts'
export class DFAState extends Object {
    constructor()
    constructor(arg0: number)
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
    getAltSet(): number[];
    hashCode(): number;
    toString(): string;
}