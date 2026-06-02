import type { NBTTag } from '../../../../../com/seedfinding/mccore/nbt/tag/NBTTag.d.ts'
import type { ByteBuffer } from '../../../../../com/seedfinding/mccore/net/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NBTString extends NBTTag<string> {
    static NULL: NBTString;
    static create(paramarg0: ByteBuffer): NBTTag<Object>;
    constructor()
    constructor(arg0: string)
    readPayload(arg0: ByteBuffer): void;
    writePayload(arg0: ByteBuffer): void;
}