import type { BiMappings } from '../../../../../com/viaversion/viaversion/api/data/BiMappings.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2IntMapBiMappings extends Object implements BiMappings {
    static of(paramarg0: { [key: string]: any }): Int2IntMapBiMappings;
    constructor(arg0: { [key: string]: any })
    // private inverse: Int2IntMapBiMappings;
    // private mappings: { [key: string]: any };
    getNewId(arg0: number): number;
    inverse(): BiMappings;
    mappedSize(): number;
    setNewId(arg0: number, arg1: number): void;
    size(): number;
}