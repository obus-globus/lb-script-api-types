import type { TruffleFile } from '../../../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { NFA } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFA.d.ts'
import type { NFAState } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAState.d.ts'
import type { NFAStateTransition } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAStateTransition.d.ts'
import type { NFAExport$StateStyle } from '../../../../../../com/oracle/truffle/regex/tregex/util/NFAExport$StateStyle.d.ts'
import type { BufferedWriter } from '../../../../../../java/io/BufferedWriter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NFAExport extends Object {
    static exportDot(paramnfa: NFA, parampath: TruffleFile, paramfullLabels: boolean, parammergeFinalStates: boolean): void;
    static exportDotReverse(paramnfa: NFA, parampath: TruffleFile, paramfullLabels: boolean, parammergeFinalStates: boolean): void;
    static exportLaTex(paramnfa: NFA, parampath: TruffleFile, paramfullLabels: boolean, parammergeFinalStates: boolean): void;
    private constructor(nfa: NFA, writer: BufferedWriter, forward: boolean, fullLabels: boolean, mergeFinalStates: boolean)
    // private forward: boolean;
    // private fullLabels: boolean;
    // private mergeFinalStates: boolean;
    // private nextStateNumber: number;
    // private nfa: NFA;
    // private stateNumberMap: Map<NFAState, number>;
    // private writer: BufferedWriter;
    // private exportDot(): void;
    // private exportLaTex(): void;
    // private getDotStateStyle(state: NFAState): string;
    // private getLaTexStateID(state: NFAState): string;
    // private getLaTexStateStyle(state: NFAState): string;
    // private getStateStyle(state: NFAState): NFAExport$StateStyle;
    // private labelState(state: NFAState, markAnchored: boolean): string;
    // private labelTransition(transition: NFAStateTransition, priority: number): string;
    // private printLaTexState(state: NFAState, relativeTo: NFAState, direction: string): void;
    // private printLaTexTransition(t: NFAStateTransition, priority: number): void;
    // private setDotNodeStyle(state: NFAState, style: string): void;
    // private showState(state: NFAState): boolean;
}