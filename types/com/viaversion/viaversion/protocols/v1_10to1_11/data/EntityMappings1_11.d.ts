import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class EntityMappings1_11 extends Object {
    static toClient(paramarg0: Map$Entry<string, Tag>[]): void;
    static toClient(paramarg0: Map$Entry<string, Tag>[], paramarg1: boolean): void;
    static toClientItem(paramarg0: Item): void;
    static toClientItem(paramarg0: Item, paramarg1: boolean): void;
    static toClientSpawner(paramarg0: Map$Entry<string, Tag>[]): void;
    static toClientSpawner(paramarg0: Map$Entry<string, Tag>[], paramarg1: boolean): void;
    static toServerItem(paramarg0: Item): void;
    static toServerItem(paramarg0: Item, paramarg1: boolean): void;
    constructor()
}