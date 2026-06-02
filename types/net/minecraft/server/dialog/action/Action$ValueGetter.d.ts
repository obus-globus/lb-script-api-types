import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Tag } from '../../../../../net/minecraft/nbt/Tag.d.ts'
export interface Action$ValueGetter extends Object{
    asTag(): Tag;
    asTemplateSubstitution(): string;
}