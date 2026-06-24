import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { TagKey } from '../../../net/minecraft/tags/TagKey.d.ts'
import type { Item } from '../../../net/minecraft/world/item/Item.d.ts'
import type { Block } from '../../../net/minecraft/world/level/block/Block.d.ts'
export class BlockItemTagId extends Record {
    static create(paramname: string): BlockItemTagId;
    static create(paramblockName: string, paramitemName: string): BlockItemTagId;
    static create(paramblockId: Identifier, paramitemId: Identifier): BlockItemTagId;
    constructor(block: TagKey<Block>, item: TagKey<Item>)
    // private block: TagKey<Block>;
    // private item: TagKey<Item>;
    block(): TagKey<Block>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    item(): TagKey<Item>;
    toString(): string;
}