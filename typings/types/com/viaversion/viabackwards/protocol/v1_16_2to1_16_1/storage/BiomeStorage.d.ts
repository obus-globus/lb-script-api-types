import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BiomeStorage extends Object implements StorableObject {
    constructor()
    // private modernToLegacyBiomes: Int2IntMap;
    addBiome(arg0: string, arg1: number): void;
    clear(): void;
    legacyBiome(arg0: number): number;
    onRemove(): void;
}