import type { BitSet } from '../../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RegionBitmap extends Object {
    constructor()
    readonly used: BitSet;
    allocate(size: number): number;
    force(position: number, size: number): void;
    free(position: number, size: number): void;
    getUsed(): (Object | null)[];
}