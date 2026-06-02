import type { TagRegistry$TagSupplier } from '../../../../com/viaversion/nbt/io/TagRegistry$TagSupplier.d.ts'
import type { TagLimiter } from '../../../../com/viaversion/nbt/limiter/TagLimiter.d.ts'
import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { DataInput } from '../../../../java/io/DataInput.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TagRegistry extends Object {
    static END: number;
    static getClassFor(paramarg0: number): Class<Object>;
    static getIdFor(paramarg0: Class<Object>): number;
    static read(paramarg0: number, paramarg1: DataInput, paramarg2: TagLimiter, paramarg3: number): Tag;
    static register(paramarg0: number, paramarg1: Class<Object>, paramarg2: (param0: Object | null, param1: DataInput, param2: TagLimiter) => unknown): void;
    constructor()
}