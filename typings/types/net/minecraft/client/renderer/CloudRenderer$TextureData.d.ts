import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CloudRenderer$TextureData extends Record {
    constructor(cells: number[], width: number, height: number)
    // private cells: number[];
    // private height: number;
    // private width: number;
    cells(): number[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    height(): number;
    toString(): string;
    width(): number;
}