import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class SNBT extends Object {
    static deserialize(paramarg0: string): Tag;
    static deserializeCompoundTag(paramarg0: string): Map$Entry<string, Tag>[];
    static serialize(paramarg0: Tag): string;
    private constructor()
}