import type { Serializable } from '../../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class SearchParams extends Object implements Serializable {
    constructor()
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    readonly claDecay: number;
    readonly conflictBoundIncFactor: number;
    readonly initConflictBound: number;
    readonly varDecay: number;
    getClaDecay(): number;
    getConflictBoundIncFactor(): number;
    getInitConflictBound(): number;
    getVarDecay(): number;
    toString(): string;
}