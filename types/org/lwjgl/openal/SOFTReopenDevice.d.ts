import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class SOFTReopenDevice extends Object {
    static alcReopenDeviceSOFT(paramarg0: number, paramarg1: CharSequence, paramarg2: number[]): boolean;
    static alcReopenDeviceSOFT(paramarg0: number, paramarg1: CharSequence, paramarg2: IntBuffer): boolean;
    static alcReopenDeviceSOFT(paramarg0: number, paramarg1: ByteBuffer, paramarg2: number[]): boolean;
    static alcReopenDeviceSOFT(paramarg0: number, paramarg1: ByteBuffer, paramarg2: IntBuffer): boolean;
    static nalcReopenDeviceSOFT(paramarg0: number, paramarg1: number, paramarg2: number): boolean;
    constructor()
}