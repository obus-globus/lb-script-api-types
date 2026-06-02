import type { NBTTag } from '../../../../../com/seedfinding/mccore/nbt/tag/NBTTag.d.ts'
import type { ByteBuffer } from '../../../../../com/seedfinding/mccore/net/ByteBuffer.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NBTIntArray extends NBTTag<number[]> {
    static NULL: NBTIntArray;
    static create(paramarg0: ByteBuffer): NBTTag<Object>;
    constructor()
    constructor(arg0: number)
    constructor(arg0: number[])
    copyValue(): number[];
    readPayload(arg0: ByteBuffer): void;
    stream(): Stream<number>;
    toBoxed(): number[];
    toList(): number[];
    writePayload(arg0: ByteBuffer): void;
}