import type { TagLimiter } from '../../../../com/viaversion/nbt/limiter/TagLimiter.d.ts'
import type { ByteTag } from '../../../../com/viaversion/nbt/tag/ByteTag.d.ts'
import type { NumberArrayTag } from '../../../../com/viaversion/nbt/tag/NumberArrayTag.d.ts'
import type { DataInput } from '../../../../java/io/DataInput.d.ts'
import type { DataOutput } from '../../../../java/io/DataOutput.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ByteArrayTag extends Object implements NumberArrayTag {
    static ID: number;
    static read(paramarg0: DataInput, paramarg1: TagLimiter): ByteArrayTag;
    constructor()
    constructor(arg0: number[])
    readonly value: number[];
    asRawString(): string;
    copy(): ByteArrayTag;
    equals(arg0: Object | null): boolean;
    get(arg0: number): number;
    getTagId(): number;
    getValue(): number[];
    hashCode(): number;
    length(): number;
    set(arg0: number, arg1: number): void;
    setValue(arg0: number[]): void;
    toListTag(): ByteTag[];
    toString(): string;
    write(arg0: DataOutput): void;
}