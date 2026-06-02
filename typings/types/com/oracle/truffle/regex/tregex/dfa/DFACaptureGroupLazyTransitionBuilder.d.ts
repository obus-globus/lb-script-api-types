import type { DFACaptureGroupPartialTransition } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupPartialTransition.d.ts'
import type { JsonConvertible } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonValue } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DFACaptureGroupLazyTransitionBuilder extends Object implements JsonConvertible {
    static DO_NOT_SET_LAST_TRANSITION: number;
    constructor(id: number, partialTransitions: DFACaptureGroupPartialTransition[], transitionToFinalState: DFACaptureGroupPartialTransition, transitionToAnchoredFinalState: DFACaptureGroupPartialTransition)
    readonly id: number;
    readonly lastTransitionIndex: number;
    readonly partialTransitions: DFACaptureGroupPartialTransition[];
    readonly transitionToAnchoredFinalState: DFACaptureGroupPartialTransition;
    readonly transitionToFinalState: DFACaptureGroupPartialTransition;
    getId(): number;
    getLastTransitionIndex(): number;
    getPartialTransitions(): DFACaptureGroupPartialTransition[];
    getTransitionToAnchoredFinalState(): DFACaptureGroupPartialTransition;
    getTransitionToFinalState(): DFACaptureGroupPartialTransition;
    setLastTransitionIndex(lastTransitionIndex: number): void;
    toJson(): JsonValue;
}