import type { StateIndex } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/StateIndex.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class StateSet<SI extends StateIndex<S>, S extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static create<SI extends StateIndex<Object>, S extends unknown>(paramstateIndex: SI): S[];
    static create<SI extends StateIndex<Object>, S extends unknown>(paramstateIndex: SI, paraminitial: S): S[];
    static create<SI extends StateIndex<Object>, S extends unknown>(paramstateIndex: SI, paraminitial: S[]): S[];
}