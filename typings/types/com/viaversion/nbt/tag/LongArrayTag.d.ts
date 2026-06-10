import type { TagLimiter } from '../../../../com/viaversion/nbt/limiter/TagLimiter.d.ts'
import type { LongTag } from '../../../../com/viaversion/nbt/tag/LongTag.d.ts'
import type { NumberArrayTag } from '../../../../com/viaversion/nbt/tag/NumberArrayTag.d.ts'
import type { DataInput } from '../../../../java/io/DataInput.d.ts'
import type { DataOutput } from '../../../../java/io/DataOutput.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LongArrayTag extends Object implements NumberArrayTag {
    static ID: number;
    static read(paramarg0: DataInput, paramarg1: TagLimiter): LongArrayTag;
    constructor()
    constructor(arg0: number[])
    readonly value: number[];
    asRawString(): string;
    copy(): LongArrayTag;
    equals(arg0: Object | null): boolean;
    get(arg0: number): number;
    getTagId(): number;
    getValue(): number[];
    hashCode(): number;
    length(): number;
    set(arg0: number, arg1: number): void;
    setValue(arg0: number[]): void;
    toListTag(): LongTag[];
    toString(): string;
    write(arg0: DataOutput): void;
}