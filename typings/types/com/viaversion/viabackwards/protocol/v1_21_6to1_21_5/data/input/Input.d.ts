import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Widget } from '../../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/widget/Widget.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface Input extends Widget, Object{
    asCommandSubstitution(): string;
    asTag(): Tag;
    key(): string;
}