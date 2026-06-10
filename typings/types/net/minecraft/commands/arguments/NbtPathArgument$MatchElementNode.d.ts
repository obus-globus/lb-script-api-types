import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { NbtPathArgument$Node } from '../../../../net/minecraft/commands/arguments/NbtPathArgument$Node.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Tag } from '../../../../net/minecraft/nbt/Tag.d.ts'
export class NbtPathArgument$MatchElementNode extends Object implements NbtPathArgument$Node {
    constructor(pattern: CompoundTag)
    // private pattern: CompoundTag;
    // private predicate: (param0: Tag) => boolean;
    collect(tags: Tag[], collector: (param0: Tag, param1: Tag[]) => void): Tag[];
    createPreferredParentTag(): Tag;
    get(tags: Tag[]): Tag[];
    getOrCreate(tags: Tag[], child: () => Tag): Tag[];
    getOrCreateTag(parent: Tag, child: () => Tag, output: Tag[]): void;
    getTag(parent: Tag, output: Tag[]): void;
    removeTag(parent: Tag): number;
    setTag(parent: Tag, toAdd: () => Tag): number;
}