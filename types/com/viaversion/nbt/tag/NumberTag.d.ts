import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export interface NumberTag extends Tag, Object{
    asBoolean(): boolean;
    asByte(): number;
    asDouble(): number;
    asFloat(): number;
    asInt(): number;
    asLong(): number;
    asShort(): number;
    copy(): NumberTag;
    getValue(): Number;
}