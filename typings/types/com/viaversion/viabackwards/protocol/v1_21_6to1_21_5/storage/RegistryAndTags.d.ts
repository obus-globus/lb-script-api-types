import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { KeyMappings } from '../../../../../../com/viaversion/viaversion/util/KeyMappings.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class RegistryAndTags extends Object implements StorableObject {
    constructor()
    // private dialogMappings: KeyMappings;
    // private dialogTags: JavaMap<string, number[]>;
    // private dialogs: JavaMap<string, Map$Entry<string, Tag>[]>;
    fromRegistry(arg0: number): Map$Entry<string, Tag>[];
    fromRegistry(arg0: string): Map$Entry<string, Tag>[];
    fromRegistryKey(arg0: string): Map$Entry<string, Tag>[][];
    onRemove(): void;
    storeRegistry(arg0: KeyMappings, arg1: JavaMap<string, Map$Entry<string, Tag>[]>): void;
    storeTags(arg0: string, arg1: number[]): void;
}