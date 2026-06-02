import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AixLibc$Timestruc extends Object {
    constructor(arg0: ByteBuffer)
    pad: number;
    tv_nsec: number;
    tv_sec: number;
}