import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AtlasLookup } from '../../../../../net/ccbluex/liquidbounce/render/atlas/AtlasLookup.d.ts'
export class AtlasLookup$Found extends Object implements AtlasLookup {
    constructor(bytes: number[])
    readonly bytes: number[];
    component1(): number[];
    copy(bytes: number[]): AtlasLookup$Found;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}