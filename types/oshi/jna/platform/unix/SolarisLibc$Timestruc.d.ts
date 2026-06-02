import type { NativeLong } from '../../../../com/sun/jna/NativeLong.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SolarisLibc$Timestruc extends Object {
    constructor(arg0: ByteBuffer)
    tv_nsec: NativeLong;
    tv_sec: NativeLong;
}