import type { TagLimiter } from '../../../../com/viaversion/nbt/limiter/TagLimiter.d.ts'
import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { DataInput } from '../../../../java/io/DataInput.d.ts'
import type { DataOutput } from '../../../../java/io/DataOutput.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StringTag extends Object implements Tag {
    static ID: number;
    static read(paramarg0: DataInput, paramarg1: TagLimiter): StringTag;
    constructor()
    constructor(arg0: string)
    readonly value: string;
    asRawString(): string;
    copy(): StringTag;
    equals(arg0: Object | null): boolean;
    getTagId(): number;
    getValue(): string;
    hashCode(): number;
    setValue(arg0: string): void;
    toString(): string;
    write(arg0: DataOutput): void;
}