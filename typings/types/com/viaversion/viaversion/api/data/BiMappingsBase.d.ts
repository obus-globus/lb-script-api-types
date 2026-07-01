import type { BiMappings } from '../../../../../com/viaversion/viaversion/api/data/BiMappings.d.ts'
import type { Mappings } from '../../../../../com/viaversion/viaversion/api/data/Mappings.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BiMappingsBase extends Object implements BiMappings {
    static of(paramarg0: Mappings): BiMappings;
    static of(paramarg0: Mappings, paramarg1: Mappings): BiMappings;
    constructor(arg0: Mappings, arg1: Mappings)
    // private inverse: BiMappingsBase;
    // private mappings: Mappings;
    getNewId(arg0: number): number;
    inverse(): BiMappings;
    mappedSize(): number;
    setNewId(arg0: number, arg1: number): void;
    size(): number;
}