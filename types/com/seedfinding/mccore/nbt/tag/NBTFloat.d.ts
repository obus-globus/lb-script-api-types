import type { NBTTag } from '../../../../../com/seedfinding/mccore/nbt/tag/NBTTag.d.ts'
import type { ByteBuffer } from '../../../../../com/seedfinding/mccore/net/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NBTFloat extends NBTTag<number> {
    static NULL: NBTFloat;
    static create(paramarg0: ByteBuffer): NBTTag<Object>;
    constructor()
    constructor(arg0: number)
    readPayload(arg0: ByteBuffer): void;
    writePayload(arg0: ByteBuffer): void;
}