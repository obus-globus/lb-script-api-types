import type { ByteBuffer } from '../../../../../com/seedfinding/mccore/net/ByteBuffer.d.ts'
import type { IByteSerializable } from '../../../../../com/seedfinding/mccore/net/IByteSerializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class NBTTag<T extends Object | number | string | boolean> extends Object implements IByteSerializable {
    static create(paramarg0: ByteBuffer): NBTTag<Object>;
    constructor(arg0: T)
    readonly name: string;
    readonly value: T;
    equals(arg0: Object | null): boolean;
    getName(): string;
    getType(): number;
    getValue(): T;
    hashCode(): number;
    read(arg0: ByteBuffer): void;
    readPayload(arg0: ByteBuffer): void;
    setValue(arg0: T): NBTTag<Object>;
    toString(): string;
    write(arg0: ByteBuffer): void;
    writePayload(arg0: ByteBuffer): void;
}