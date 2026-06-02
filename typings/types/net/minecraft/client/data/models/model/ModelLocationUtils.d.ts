import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
export class ModelLocationUtils extends Object {
    static decorateBlockModelLocation(paramid: string): Identifier;
    static decorateItemModelLocation(paramid: string): Identifier;
    static getModelLocation(paramitem: Item): Identifier;
    static getModelLocation(paramitem: Item, paramsuffix: string): Identifier;
    static getModelLocation(paramblock: Block): Identifier;
    static getModelLocation(paramblock: Block, paramsuffix: string): Identifier;
    constructor()
}