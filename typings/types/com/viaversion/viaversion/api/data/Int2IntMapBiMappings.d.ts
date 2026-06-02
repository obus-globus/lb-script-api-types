import type { BiMappings } from '../../../../../com/viaversion/viaversion/api/data/BiMappings.d.ts'
import type { Mappings } from '../../../../../com/viaversion/viaversion/api/data/Mappings.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2IntMapBiMappings extends Object implements BiMappings {
    static of(paramarg0: Mappings): BiMappings;
    static of(paramarg0: Mappings, paramarg1: Mappings): BiMappings;
    static of(paramarg0: Int2IntBiMap): Int2IntMapBiMappings;
    constructor(arg0: Int2IntBiMap)
    private constructor(arg0: Int2IntBiMap, arg1: Int2IntMapBiMappings)
    // private inverse: Int2IntMapBiMappings;
    // private mappings: Int2IntBiMap;
    getNewId(arg0: number): number;
    inverse(): BiMappings;
    mappedSize(): number;
    setNewId(arg0: number, arg1: number): void;
    size(): number;
}