import type { PreCalculatedResultFactory } from '../../../../../../com/oracle/truffle/regex/result/PreCalculatedResultFactory.d.ts'
import type { NFA } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFA.d.ts'
import type { NFAState } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAState.d.ts'
import type { NFAStateTransition } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAStateTransition.d.ts'
import type { Counter$ThresholdCounter } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Counter$ThresholdCounter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class NFATraceFinderGenerator extends Object {
    static generateTraceFinder(paramnfa: NFA): NFA;
    private constructor(originalNFA: NFA)
    // private duplicatedStatesMap: NFAState[][];
    // private originalNFA: NFA;
    // private resultDeDuplicationMap: EconomicMap<PreCalculatedResultFactory, PreCalculatedResultFactory>;
    // private resultList: PreCalculatedResultFactory[];
    // private stateID: Counter$ThresholdCounter;
    // private states: NFAState[];
    // private trackLastGroup: boolean;
    // private transitionID: Counter$ThresholdCounter;
    // private copy(s: NFAState): NFAState;
    // private copy(s: NFAState, resultID: number): NFAState;
    // private copyEntry(dummyInitialState: NFAState, originalReverseEntry: NFAStateTransition): NFAStateTransition;
    // private createTransition(source: NFAState, target: NFAState, originalTransition: NFAStateTransition, preCalcResult: PreCalculatedResultFactory, preCalcResultIndex: number): NFAStateTransition;
    // private getEncodedSize(t: NFAStateTransition): number;
    // private registerCopy(original: NFAState, copy: NFAState): void;
    // private resultFactory(): PreCalculatedResultFactory;
    // private run(): NFA;
}