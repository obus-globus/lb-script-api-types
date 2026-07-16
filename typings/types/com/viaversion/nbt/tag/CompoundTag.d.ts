import type { TagLimiter } from '../../../../com/viaversion/nbt/limiter/TagLimiter.d.ts'
import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { DataInput } from '../../../../java/io/DataInput.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class CompoundTag {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static ID: number;
    static read(paramarg0: DataInput, paramarg1: TagLimiter, paramarg2: number): Map$Entry<string, Tag>[];
}