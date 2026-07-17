import type { Mappings } from '../../../../../com/viaversion/viaversion/api/data/Mappings.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntArrayMappings extends Object implements Mappings {
    static of(paramarg0: number[], paramarg1: number): IntArrayMappings;
    constructor(arg0: number[], arg1: number)
    // private mappedIds: number;
    // private mappings: number[];
    contains(arg0: number): boolean;
    getNewId(arg0: number): number;
    getNewIdOrDefault(arg0: number, arg1: number): number;
    inverse(): Mappings;
    isIdentity(): boolean;
    mappedSize(): number;
    raw(): number[];
    setNewId(arg0: number, arg1: number): void;
    size(): number;
}