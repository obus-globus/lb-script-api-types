import type { CommandSyntaxException } from '../../../../com/mojang/brigadier/exceptions/CommandSyntaxException.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { NbtPathArgument$Node } from '../../../../net/minecraft/commands/arguments/NbtPathArgument$Node.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Tag } from '../../../../net/minecraft/nbt/Tag.d.ts'
export class NbtPathArgument$NbtPath extends Object {
    static CODEC: Codec<NbtPathArgument$NbtPath>;
    static isTooDeep(paramtag: Tag, paramdepth: number): boolean;
    static of(paramstring: string): NbtPathArgument$NbtPath;
    constructor(original: string, nodes: NbtPathArgument$Node[], nodeToOriginalPosition: Object2IntMap<NbtPathArgument$Node>)
    // private nodeToOriginalPosition: Object2IntMap<NbtPathArgument$Node>;
    // private nodes: NbtPathArgument$Node[];
    // private original: string;
    asString(): string;
    countMatching(tag: Tag): number;
    // private createNotFoundException(node: NbtPathArgument$Node): CommandSyntaxException;
    // private estimatePathDepth(): number;
    get(tag: Tag): Tag[];
    getOrCreate(tag: Tag, newTagValue: () => Tag): Tag[];
    // private getOrCreateParents(tag: Tag): Tag[];
    insert(index: number, target: CompoundTag, toInsert: Tag[]): number;
    remove(tag: Tag): number;
    set(tag: Tag, toAdd: Tag): number;
    toString(): string;
}