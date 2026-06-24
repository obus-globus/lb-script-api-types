import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Item } from '../../../net/minecraft/world/item/Item.d.ts'
import type { Block } from '../../../net/minecraft/world/level/block/Block.d.ts'
export class BlockItemId extends Record {
    static create(paramname: string): BlockItemId;
    static create(paramblockName: string, paramitemName: string): BlockItemId;
    static create(paramblockId: Identifier, paramitemId: Identifier): BlockItemId;
    constructor(block: ResourceKey<Block>, item: ResourceKey<Item>)
    // private block: ResourceKey<Block>;
    // private item: ResourceKey<Item>;
    block(): ResourceKey<Block>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    item(): ResourceKey<Item>;
    toString(): string;
}