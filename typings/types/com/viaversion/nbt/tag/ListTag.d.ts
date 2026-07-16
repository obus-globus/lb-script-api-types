import type { TagLimiter } from '../../../../com/viaversion/nbt/limiter/TagLimiter.d.ts'
import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { DataInput } from '../../../../java/io/DataInput.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ListTag<T extends Tag> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static ID: number;
    static of(paramarg0: Tag[]): Object[];
    static read(paramarg0: DataInput, paramarg1: TagLimiter, paramarg2: number): Object[];
}