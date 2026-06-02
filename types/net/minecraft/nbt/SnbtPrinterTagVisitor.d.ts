import type { Object } from '../../../java/lang/Object.d.ts'
import type { ByteTag } from '../../../net/minecraft/nbt/ByteTag.d.ts'
import type { CompoundTag } from '../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { DoubleTag } from '../../../net/minecraft/nbt/DoubleTag.d.ts'
import type { EndTag } from '../../../net/minecraft/nbt/EndTag.d.ts'
import type { FloatTag } from '../../../net/minecraft/nbt/FloatTag.d.ts'
import type { IntTag } from '../../../net/minecraft/nbt/IntTag.d.ts'
import type { LongTag } from '../../../net/minecraft/nbt/LongTag.d.ts'
import type { ShortTag } from '../../../net/minecraft/nbt/ShortTag.d.ts'
import type { StringTag } from '../../../net/minecraft/nbt/StringTag.d.ts'
import type { Tag } from '../../../net/minecraft/nbt/Tag.d.ts'
import type { TagVisitor } from '../../../net/minecraft/nbt/TagVisitor.d.ts'
export class SnbtPrinterTagVisitor extends Object implements TagVisitor {
    constructor()
    constructor(indentation: string, depth: number, path: string[])
    // private depth: number;
    // private indentation: string;
    // private path: string[];
    // private result: string;
    getKeys(tag: CompoundTag): string[];
    pathString(): string;
    // private popPath(): void;
    // private pushPath(e: string): void;
    visit(tag: Tag): string;
    visitByte(tag: ByteTag): void;
    visitByteArray(tag: (Object | null)[]): void;
    visitCompound(tag: CompoundTag): void;
    visitDouble(tag: DoubleTag): void;
    visitEnd(tag: EndTag): void;
    visitFloat(tag: FloatTag): void;
    visitInt(tag: IntTag): void;
    visitIntArray(tag: (Object | null)[]): void;
    visitList(tag: (Object | null)[]): void;
    visitLong(tag: LongTag): void;
    visitLongArray(tag: (Object | null)[]): void;
    visitShort(tag: ShortTag): void;
    visitString(tag: StringTag): void;
}