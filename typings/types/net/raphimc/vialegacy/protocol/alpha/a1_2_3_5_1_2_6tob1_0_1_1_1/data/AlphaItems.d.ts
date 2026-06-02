import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { IdAndData } from '../../../../../../../com/viaversion/viaversion/util/IdAndData.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class AlphaItems extends Object {
    static doInteract(paramarg0: Item): void;
    static doPlace(paramarg0: Item, paramarg1: number, paramarg2: IdAndData): void;
    static getMaxStackSize(paramarg0: number): number;
    static isValid(paramarg0: number): boolean;
    constructor()
}