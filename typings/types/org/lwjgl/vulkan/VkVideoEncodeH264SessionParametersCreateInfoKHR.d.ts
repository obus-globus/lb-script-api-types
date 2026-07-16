import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkVideoEncodeH264SessionParametersAddInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH264SessionParametersAddInfoKHR.d.ts'
export class VkVideoEncodeH264SessionParametersCreateInfoKHR extends Struct<VkVideoEncodeH264SessionParametersCreateInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXSTDPPSCOUNT: number;
    static MAXSTDSPSCOUNT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPARAMETERSADDINFO: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkVideoEncodeH264SessionParametersCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeH264SessionParametersCreateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeH264SessionParametersCreateInfoKHR;
    static create(paramarg0: number): VkVideoEncodeH264SessionParametersCreateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeH264SessionParametersCreateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeH264SessionParametersCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeH264SessionParametersCreateInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxStdPPSCount(paramarg0: number): number;
    static nmaxStdPPSCount(paramarg0: number, paramarg1: number): void;
    static nmaxStdSPSCount(paramarg0: number): number;
    static nmaxStdSPSCount(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npParametersAddInfo(paramarg0: number): VkVideoEncodeH264SessionParametersAddInfoKHR;
    static npParametersAddInfo(paramarg0: number, paramarg1: VkVideoEncodeH264SessionParametersAddInfoKHR): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeH264SessionParametersCreateInfoKHR;
    maxStdPPSCount(): number;
    maxStdPPSCount(arg0: number): VkVideoEncodeH264SessionParametersCreateInfoKHR;
    maxStdSPSCount(): number;
    maxStdSPSCount(arg0: number): VkVideoEncodeH264SessionParametersCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeH264SessionParametersCreateInfoKHR;
    pParametersAddInfo(): VkVideoEncodeH264SessionParametersAddInfoKHR;
    pParametersAddInfo(arg0: VkVideoEncodeH264SessionParametersAddInfoKHR): VkVideoEncodeH264SessionParametersCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoEncodeH264SessionParametersCreateInfoKHR;
    sType$Default(): VkVideoEncodeH264SessionParametersCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: VkVideoEncodeH264SessionParametersAddInfoKHR): VkVideoEncodeH264SessionParametersCreateInfoKHR;
    set(arg0: VkVideoEncodeH264SessionParametersCreateInfoKHR): VkVideoEncodeH264SessionParametersCreateInfoKHR;
    sizeof(): number;
}