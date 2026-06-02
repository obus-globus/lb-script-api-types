import type { TagReader } from '../../../../com/viaversion/nbt/io/TagReader.d.ts'
import type { TagWriter } from '../../../../com/viaversion/nbt/io/TagWriter.d.ts'
import type { TagLimiter } from '../../../../com/viaversion/nbt/limiter/TagLimiter.d.ts'
import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { DataInput } from '../../../../java/io/DataInput.d.ts'
import type { DataOutput } from '../../../../java/io/DataOutput.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NBTIO extends Object {
    static readTag(paramarg0: DataInput, paramarg1: TagLimiter, paramarg2: boolean, paramarg3: Class<Object>): Object | null;
    static reader(paramarg0: Class<Object>): TagReader<Object>;
    static reader(): TagReader<Tag>;
    static writeTag(paramarg0: DataOutput, paramarg1: Tag, paramarg2: boolean): void;
    static writer(): TagWriter;
    private constructor()
}