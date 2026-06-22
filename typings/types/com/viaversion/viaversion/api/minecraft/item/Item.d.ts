import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { StructuredDataContainer } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataContainer.d.ts'
import type { ItemBase } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/ItemBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export interface Item extends ItemBase, Object{
    amount(): number;
    copy(): Item;
    data(): number;
    dataContainer(): StructuredDataContainer;
    identifier(): number;
    isEmpty(): boolean;
    isTemplate(): boolean;
    setAmount(arg0: number): void;
    setData(arg0: number): void;
    setIdentifier(arg0: number): void;
    setTag(arg0: Map$Entry<string, Tag>[]): void;
    tag(): Map$Entry<string, Tag>[];
}