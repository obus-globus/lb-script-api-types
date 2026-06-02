import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { StructuredDataContainer } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataContainer.d.ts'
import type { ItemBase } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/ItemBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export interface Item extends ItemBase, Object{
    copy(): Item;
    data(): number;
    dataContainer(): StructuredDataContainer;
    isEmpty(): boolean;
    isTemplate(): boolean;
    setData(arg0: number): void;
    setTag(arg0: Map$Entry<string, Tag>[]): void;
    tag(): Map$Entry<string, Tag>[];
}