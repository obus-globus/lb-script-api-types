import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class RegistryDataStorage extends Object implements StorableObject {
    constructor()
    readonly dimensionKeys: string[];
    // private registryData: Map$Entry<string, Tag>[];
    // private sentRegistryData: boolean;
    clear(): void;
    dimensionKeys(): string[];
    onRemove(): void;
    registryData(): Map$Entry<string, Tag>[];
    sentRegistryData(): boolean;
    setDimensionKeys(arg0: string[]): void;
    setSentRegistryData(): void;
}