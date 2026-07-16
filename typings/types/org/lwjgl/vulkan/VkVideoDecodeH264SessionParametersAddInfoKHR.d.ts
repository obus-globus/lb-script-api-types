import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkVideoDecodeH264SessionParametersAddInfoKHR extends Struct<VkVideoDecodeH264SessionParametersAddInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSTDPPSS: number;
    static PSTDSPSS: number;
    static SIZEOF: number;
    static STDPPSCOUNT: number;
    static STDSPSCOUNT: number;
    static STYPE: number;
    static calloc(): VkVideoDecodeH264SessionParametersAddInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoDecodeH264SessionParametersAddInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoDecodeH264SessionParametersAddInfoKHR;
    static create(paramarg0: number): VkVideoDecodeH264SessionParametersAddInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoDecodeH264SessionParametersAddInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoDecodeH264SessionParametersAddInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoDecodeH264SessionParametersAddInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npStdPPSs(paramarg0: number): (Object | null)[];
    static npStdPPSs(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npStdSPSs(paramarg0: number): (Object | null)[];
    static npStdSPSs(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstdPPSCount(paramarg0: number): number;
    static nstdPPSCount(paramarg0: number, paramarg1: number): void;
    static nstdSPSCount(paramarg0: number): number;
    static nstdSPSCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoDecodeH264SessionParametersAddInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoDecodeH264SessionParametersAddInfoKHR;
    pStdPPSs(): (Object | null)[];
    pStdPPSs(arg0: (Object | null)[]): VkVideoDecodeH264SessionParametersAddInfoKHR;
    pStdSPSs(): (Object | null)[];
    pStdSPSs(arg0: (Object | null)[]): VkVideoDecodeH264SessionParametersAddInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoDecodeH264SessionParametersAddInfoKHR;
    sType$Default(): VkVideoDecodeH264SessionParametersAddInfoKHR;
    set(arg0: number, arg1: number, arg2: (Object | null)[], arg3: (Object | null)[]): VkVideoDecodeH264SessionParametersAddInfoKHR;
    set(arg0: VkVideoDecodeH264SessionParametersAddInfoKHR): VkVideoDecodeH264SessionParametersAddInfoKHR;
    sizeof(): number;
    stdPPSCount(): number;
    stdSPSCount(): number;
}