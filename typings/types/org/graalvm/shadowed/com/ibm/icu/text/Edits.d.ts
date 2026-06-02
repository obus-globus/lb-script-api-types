import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Edits$Iterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Edits$Iterator.d.ts'
export class Edits extends Object {
    constructor()
    // private array: string[];
    // private delta: number;
    // private length: number;
    // private numChanges: number;
    addReplace(oldLength: number, newLength: number): void;
    addUnchanged(unchangedLength: number): void;
    // private append(r: number): void;
    getCoarseChangesIterator(): Edits$Iterator;
    getCoarseIterator(): Edits$Iterator;
    getFineChangesIterator(): Edits$Iterator;
    getFineIterator(): Edits$Iterator;
    // private growArray(): boolean;
    hasChanges(): boolean;
    // private lastUnit(): number;
    lengthDelta(): number;
    mergeAndAppend(ab: Edits, bc: Edits): Edits;
    numberOfChanges(): number;
    reset(): void;
    // private setLastUnit(last: number): void;
}