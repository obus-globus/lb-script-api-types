import type { BiMappingsBase } from '../../../../../com/viaversion/viaversion/api/data/BiMappingsBase.d.ts'
import type { Mappings } from '../../../../../com/viaversion/viaversion/api/data/Mappings.d.ts'
export class ItemMappings extends BiMappingsBase {
    static of(paramarg0: Mappings, paramarg1: Mappings): ItemMappings;
    private constructor(arg0: Mappings, arg1: Mappings)
    setNewId(arg0: number, arg1: number): void;
}