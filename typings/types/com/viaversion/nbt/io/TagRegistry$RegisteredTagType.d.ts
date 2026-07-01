import type { TagRegistry$TagSupplier } from '../../../../com/viaversion/nbt/io/TagRegistry$TagSupplier.d.ts'
import type { TagLimiter } from '../../../../com/viaversion/nbt/limiter/TagLimiter.d.ts'
import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { DataInput } from '../../../../java/io/DataInput.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TagRegistry$RegisteredTagType extends Object {
    constructor(arg0: Class<Object>, arg1: (param0: DataInput, param1: TagLimiter, param2: number) => Tag, arg2: any)
    // private supplier: (param0: DataInput, param1: TagLimiter, param2: number) => Tag;
    // private type: Class<Tag>;
}