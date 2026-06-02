import type { TagLimiter } from '../../../../com/viaversion/nbt/limiter/TagLimiter.d.ts'
import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { DataInput } from '../../../../java/io/DataInput.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TagRegistry$TagSupplier<T extends Tag> extends Object{
    create(arg0: DataInput, arg1: TagLimiter, arg2: number): T;
}