import type { TagLimiter } from '../../../../com/viaversion/nbt/limiter/TagLimiter.d.ts'
import type { NumberTag } from '../../../../com/viaversion/nbt/tag/NumberTag.d.ts'
import type { DataInput } from '../../../../java/io/DataInput.d.ts'
import type { DataOutput } from '../../../../java/io/DataOutput.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LongTag extends Object implements NumberTag {
    static ID: number;
    static ZERO: LongTag;
    static read(paramarg0: DataInput, paramarg1: TagLimiter): LongTag;
    constructor(arg0: number)
    readonly value: number;
    asBoolean(): boolean;
    asByte(): number;
    asDouble(): number;
    asFloat(): number;
    asInt(): number;
    asLong(): number;
    asRawString(): string;
    asShort(): number;
    copy(): NumberTag;
    equals(arg0: Object | null): boolean;
    getTagId(): number;
    getValue(): number;
    hashCode(): number;
    toString(): string;
    write(arg0: DataOutput): void;
}