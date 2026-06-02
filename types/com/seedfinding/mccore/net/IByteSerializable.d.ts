import type { ByteBuffer } from '../../../../com/seedfinding/mccore/net/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IByteSerializable extends Object{
    read(arg0: ByteBuffer): void;
    write(arg0: ByteBuffer): void;
}