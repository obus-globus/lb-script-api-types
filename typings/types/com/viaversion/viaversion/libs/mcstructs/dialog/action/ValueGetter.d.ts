import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ValueGetter extends Object{
    asTag(): Tag;
    asTemplateSubstitution(): string;
}