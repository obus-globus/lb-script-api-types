import type { DataInput } from '../../../java/io/DataInput.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { NbtAccounter } from '../../../net/minecraft/nbt/NbtAccounter.d.ts'
import type { StreamTagVisitor } from '../../../net/minecraft/nbt/StreamTagVisitor.d.ts'
import type { StreamTagVisitor$ValueResult } from '../../../net/minecraft/nbt/StreamTagVisitor$ValueResult.d.ts'
import type { Tag } from '../../../net/minecraft/nbt/Tag.d.ts'
export interface TagType<T extends Tag> extends Object{
    getName(): string;
    getPrettyName(): string;
    load(input: DataInput, accounter: NbtAccounter): T;
    parse(input: DataInput, output: StreamTagVisitor, accounter: NbtAccounter): StreamTagVisitor$ValueResult;
    parseRoot(input: DataInput, output: StreamTagVisitor, accounter: NbtAccounter): void;
    skip(input: DataInput, count: number, accounter: NbtAccounter): void;
    skip(input: DataInput, accounter: NbtAccounter): void;
}