import type { DataInput } from '../../../java/io/DataInput.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { NbtAccounter } from '../../../net/minecraft/nbt/NbtAccounter.d.ts'
import type { StreamTagVisitor } from '../../../net/minecraft/nbt/StreamTagVisitor.d.ts'
import type { Tag } from '../../../net/minecraft/nbt/Tag.d.ts'
import type { TagType } from '../../../net/minecraft/nbt/TagType.d.ts'
export interface TagType$StaticSize<T extends Tag> extends Object, TagType<T>{
    parseRoot(input: DataInput, output: StreamTagVisitor, accounter: NbtAccounter): void;
    size(): number;
    skip(input: DataInput, count: number, accounter: NbtAccounter): void;
    skip(input: DataInput, accounter: NbtAccounter): void;
}