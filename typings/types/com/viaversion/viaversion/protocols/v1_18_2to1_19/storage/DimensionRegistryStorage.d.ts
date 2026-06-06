import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class DimensionRegistryStorage extends Object implements StorableObject {
    constructor()
    dimensionKey(arg0: Map$Entry<string, Tag>[]): string;
    dimensions(): Map<Map$Entry<string, Tag>[], string>;
    onRemove(): void;
    setDimensions(arg0: Map<Map$Entry<string, Tag>[], string>): void;
}