import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
export class BlockStateParser$TagResult extends Record {
    constructor(tag: Holder<Block>[], vagueProperties: { [key: string]: string }, nbt: CompoundTag)
    // private nbt: CompoundTag;
    // private tag: Holder<Block>[];
    // private vagueProperties: { [key: string]: string };
    equals(o: Object | null): boolean;
    hashCode(): number;
    nbt(): CompoundTag;
    tag(): Holder<Block>[];
    toString(): string;
    vagueProperties(): { [key: string]: string };
}