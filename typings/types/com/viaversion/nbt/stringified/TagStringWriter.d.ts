import type { ByteArrayTag } from '../../../../com/viaversion/nbt/tag/ByteArrayTag.d.ts'
import type { IntArrayTag } from '../../../../com/viaversion/nbt/tag/IntArrayTag.d.ts'
import type { LongArrayTag } from '../../../../com/viaversion/nbt/tag/LongArrayTag.d.ts'
import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class TagStringWriter extends Object {
    constructor(arg0: StringBuilder)
    // private needsSeparator: boolean;
    // private out: StringBuilder;
    // private beginArray(arg0: string): TagStringWriter;
    beginCompound(): TagStringWriter;
    beginList(): TagStringWriter;
    // private endArray(): TagStringWriter;
    endCompound(): TagStringWriter;
    endList(): TagStringWriter;
    key(arg0: string): TagStringWriter;
    // private printAndResetSeparator(): void;
    value(arg0: string, arg1: string): TagStringWriter;
    // private writeByteArray(arg0: ByteArrayTag): TagStringWriter;
    // private writeCompound(arg0: Map$Entry<string, Tag>[]): TagStringWriter;
    // private writeIntArray(arg0: IntArrayTag): TagStringWriter;
    // private writeList(arg0: T[]): TagStringWriter;
    // private writeLongArray(arg0: LongArrayTag): TagStringWriter;
    // private writeMaybeQuoted(arg0: string, arg1: boolean): void;
    writeTag(arg0: Tag): TagStringWriter;
}