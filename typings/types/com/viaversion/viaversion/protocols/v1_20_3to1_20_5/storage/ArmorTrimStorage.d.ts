import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { KeyMappings } from '../../../../../../com/viaversion/viaversion/util/KeyMappings.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ArmorTrimStorage extends Object implements StorableObject {
    constructor()
    onRemove(): void;
    setTrimMaterials(arg0: KeyMappings): void;
    setTrimPatterns(arg0: KeyMappings): void;
    trimMaterials(): KeyMappings;
    trimPatterns(): KeyMappings;
}