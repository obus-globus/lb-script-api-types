import type { NFAStateTransition } from '../../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAStateTransition.d.ts'
import type { DFAAbstractTransitionNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFAAbstractTransitionNode.d.ts'
import type { TRegexDFAExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorLocals.d.ts'
import type { TRegexDFAExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorNode.d.ts'
import type { JsonConvertible } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DFASimpleCGTransition extends DFAAbstractTransitionNode implements JsonConvertible {
    static create(paramid: number, paramsuccessor: number, paramt: NFAStateTransition, paramfullClear: boolean, paramisFinalTransition: boolean): DFASimpleCGTransition;
    private constructor(id: number, successor: number, indexUpdates: number[], indexClears: number[], lastGroup: number, isFinalTransition: boolean)
    // private indexClears: number[];
    // private indexUpdates: number[];
    // private isFinalTransition: boolean;
    // private lastGroup: number;
    apply(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode): void;
    apply(result: number[], currentIndex: number, trackLastGroup: boolean, forward: boolean): void;
    // private applyIndexClear(result: number[]): void;
    // private applyIndexUpdate(result: number[], currentIndex: number): void;
    // private applyLastGroup(result: number[], forward: boolean): void;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    // private isFullClear(): boolean;
    toJson(): JsonValue;
}