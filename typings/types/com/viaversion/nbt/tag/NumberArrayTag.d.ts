import type { NumberTag } from '../../../../com/viaversion/nbt/tag/NumberTag.d.ts'
import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { DataOutput } from '../../../../java/io/DataOutput.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface NumberArrayTag extends Tag, Object{
    asRawString(): string;
    copy(): NumberArrayTag;
    getTagId(): number;
    getValue(): Object;
    length(): number;
    toListTag(): NumberTag[];
    write(arg0: DataOutput): void;
}