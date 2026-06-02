import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { OptionalType } from '../../../../../../../com/viaversion/viaversion/api/type/OptionalType.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
export class TagType$OptionalTagType extends OptionalType<Tag> {
    static trustedType(): TagType$OptionalTagType;
    static type(): TagType$OptionalTagType;
    private constructor(arg0: Type<Tag>)
}