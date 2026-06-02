import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { OptionalType } from '../../../../../../../com/viaversion/viaversion/api/type/OptionalType.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Map$Entry } from '../../../../../../../java/util/Map$Entry.d.ts'
export class CompoundTagType$OptionalCompoundTagType extends OptionalType<Map$Entry<string, Tag>[]> {
    static trustedType(): CompoundTagType$OptionalCompoundTagType;
    static type(): CompoundTagType$OptionalCompoundTagType;
    private constructor(arg0: Type<Map$Entry<string, Tag>[]>)
}