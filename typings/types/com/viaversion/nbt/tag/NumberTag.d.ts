import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { DataOutput } from '../../../../java/io/DataOutput.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export interface NumberTag extends Tag, Object{
    asBoolean(): boolean;
    asByte(): number;
    asDouble(): number;
    asFloat(): number;
    asInt(): number;
    asLong(): number;
    asRawString(): string;
    asShort(): number;
    copy(): NumberTag;
    getTagId(): number;
    getValue(): Number;
    write(arg0: DataOutput): void;
}