import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ChunkProtoTickListFix$PoorMansPalettedContainer extends Object {
    constructor(palette: Dynamic<Object>[], data: number[])
    // private bits: number;
    // private data: number[];
    // private mask: number;
    // private palette: Dynamic<Object>[];
    // private valuesPerLong: number;
    data(): number[];
    get(x: number, y: number, z: number): Dynamic<Object>;
    // private getIndex(x: number, y: number, z: number): number;
    palette(): Dynamic<Object>[];
}