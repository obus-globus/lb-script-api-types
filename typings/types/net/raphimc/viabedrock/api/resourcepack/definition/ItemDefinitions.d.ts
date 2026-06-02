import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { ItemDefinitions$ItemDefinition } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/definition/ItemDefinitions$ItemDefinition.d.ts'
import type { ResourcePackStorage } from '../../../../../../net/raphimc/viabedrock/protocol/storage/ResourcePackStorage.d.ts'
export class ItemDefinitions extends Object {
    constructor(arg0: ResourcePackStorage)
    // private items: { [key: string]: ItemDefinitions$ItemDefinition };
    addFromNetworkTag(arg0: string, arg1: Map$Entry<string, Tag>[]): void;
    get(arg0: string): ItemDefinitions$ItemDefinition;
    remove(arg0: string): void;
}