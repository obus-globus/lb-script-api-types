import type { StructuredDataContainer } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataContainer.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { StructuredItem } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/StructuredItem.d.ts'
export class StructuredItemTemplate extends StructuredItem {
    static empty(): StructuredItem;
    static emptyArray(paramarg0: number): Item[];
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: StructuredDataContainer)
    copy(): StructuredItemTemplate;
    isTemplate(): boolean;
    setAmount(arg0: number): void;
    setIdentifier(arg0: number): void;
}