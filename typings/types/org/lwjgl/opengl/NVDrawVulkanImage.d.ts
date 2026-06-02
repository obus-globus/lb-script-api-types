import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class NVDrawVulkanImage extends Object {
    static glDrawVkImageNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number): void;
    static glGetVkProcAddrNV(paramarg0: CharSequence): number;
    static glGetVkProcAddrNV(paramarg0: ByteBuffer): number;
    static glSignalVkFenceNV(paramarg0: number): void;
    static glSignalVkSemaphoreNV(paramarg0: number): void;
    static glWaitVkSemaphoreNV(paramarg0: number): void;
    static nglGetVkProcAddrNV(paramarg0: number): number;
    constructor()
}