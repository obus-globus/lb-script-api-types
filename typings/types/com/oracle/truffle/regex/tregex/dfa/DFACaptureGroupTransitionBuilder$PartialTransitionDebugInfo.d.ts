import type { NFAStateTransition } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAStateTransition.d.ts'
import type { DFACaptureGroupPartialTransition } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupPartialTransition.d.ts'
import type { JsonConvertible } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonValue } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DFACaptureGroupTransitionBuilder$PartialTransitionDebugInfo extends Object implements JsonConvertible {
    constructor(node: DFACaptureGroupPartialTransition)
    constructor(node: DFACaptureGroupPartialTransition, nResults: number)
    constructor(nResults: number)
    readonly node: DFACaptureGroupPartialTransition;
    // private resultToTransitionMap: number[];
    getNode(): DFACaptureGroupPartialTransition;
    mapResultToNFATransition(resultNumber: number, transition: NFAStateTransition): void;
    toJson(): JsonValue;
}