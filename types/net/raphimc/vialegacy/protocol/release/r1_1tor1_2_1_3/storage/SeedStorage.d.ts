import type { BiomeSource } from '../../../../../../../com/seedfinding/mcbiome/source/BiomeSource.d.ts'
import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class SeedStorage extends Object implements StorableObject {
    constructor()
    biomeSource: BiomeSource;
    seed: number;
    onRemove(): void;
}