import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ItemType } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemType.d.ts'
export class ItemCategory extends Record {
    constructor(type: ItemType, subtype: number)
    // private subtype: number;
    /*not mapped: */ subtype(): number;
    // private type: ItemType;
    /*not mapped: */ type(): ItemType;
    component1(): ItemType;
    component2(): number;
    copy(type: ItemType, subtype: number): ItemCategory;
    equals(other: Object | null): boolean;
    hashCode(): number;
    isEmpty(): boolean;
    toString(): string;
}