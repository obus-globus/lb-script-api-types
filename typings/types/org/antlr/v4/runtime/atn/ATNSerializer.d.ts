import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ATN } from '../../../../../org/antlr/v4/runtime/atn/ATN.d.ts'
import type { IntegerList } from '../../../../../org/antlr/v4/runtime/misc/IntegerList.d.ts'
import type { IntervalSet } from '../../../../../org/antlr/v4/runtime/misc/IntervalSet.d.ts'
export class ATNSerializer extends Object {
    static getSerialized(paramarg0: ATN): IntegerList;
    constructor(arg0: ATN)
    atn: ATN;
    // private data: IntegerList;
    // private nonGreedyStates: IntegerList;
    // private precedenceStates: IntegerList;
    // private sets: JavaMap<IntervalSet, boolean>;
    // private addDecisionStartStates(): void;
    // private addEdges(): number;
    // private addEdges(arg0: number, arg1: JavaMap<IntervalSet, number>): void;
    // private addLexerActions(): void;
    // private addModeStartStates(): void;
    // private addNonGreedyStates(): void;
    // private addPreamble(): void;
    // private addPrecedenceStates(): void;
    // private addRuleStatesAndLexerTokenTypes(): void;
    // private addSets(): JavaMap<IntervalSet, number>;
    serialize(): IntegerList;
}