import type { Edits$Iterator } from '../../../../com/ibm/icu/text/Edits$Iterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Edits extends Object {
    constructor()
    // private array: string[];
    // private delta: number;
    // private length: number;
    // private numChanges: number;
    addReplace(arg0: number, arg1: number): void;
    addUnchanged(arg0: number): void;
    // private append(arg0: number): void;
    getCoarseChangesIterator(): Edits$Iterator;
    getCoarseIterator(): Edits$Iterator;
    getFineChangesIterator(): Edits$Iterator;
    getFineIterator(): Edits$Iterator;
    // private growArray(): boolean;
    hasChanges(): boolean;
    // private lastUnit(): number;
    lengthDelta(): number;
    mergeAndAppend(arg0: Edits, arg1: Edits): Edits;
    numberOfChanges(): number;
    reset(): void;
    // private setLastUnit(arg0: number): void;
}