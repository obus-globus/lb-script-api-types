import type { DFACaptureGroupLazyTransition } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupLazyTransition.d.ts'
import type { DFACaptureGroupPartialTransition } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupPartialTransition.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class DFACaptureGroupLazyTransition$Branches extends DFACaptureGroupLazyTransition {
    constructor(transitions: DFACaptureGroupPartialTransition[])
    // private common: DFACaptureGroupPartialTransition;
    // private transitions: DFACaptureGroupPartialTransition[];
    equals(obj: Object | null): boolean;
    getCost(): number;
    hashCode(): number;
}