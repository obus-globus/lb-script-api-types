import type { BitSet } from '../../../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class IntPool extends Object {
    constructor()
    // private next: number;
    // private used: BitSet;
    acquire(): number;
    clear(): void;
    release(arg0: number): void;
}