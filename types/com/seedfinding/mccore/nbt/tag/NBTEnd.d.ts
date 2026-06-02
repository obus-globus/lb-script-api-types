import type { NBTTag } from '../../../../../com/seedfinding/mccore/nbt/tag/NBTTag.d.ts'
import type { ByteBuffer } from '../../../../../com/seedfinding/mccore/net/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NBTEnd extends NBTTag<void> {
    static INSTANCE: NBTEnd;
    static create(paramarg0: ByteBuffer): NBTTag<Object>;
    constructor()
    read(arg0: ByteBuffer): void;
    readPayload(arg0: ByteBuffer): void;
    write(arg0: ByteBuffer): void;
    writePayload(arg0: ByteBuffer): void;
}