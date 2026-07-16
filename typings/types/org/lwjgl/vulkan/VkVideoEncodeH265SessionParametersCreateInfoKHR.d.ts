import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkVideoEncodeH265SessionParametersAddInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH265SessionParametersAddInfoKHR.d.ts'
export class VkVideoEncodeH265SessionParametersCreateInfoKHR extends Struct<VkVideoEncodeH265SessionParametersCreateInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXSTDPPSCOUNT: number;
    static MAXSTDSPSCOUNT: number;
    static MAXSTDVPSCOUNT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPARAMETERSADDINFO: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkVideoEncodeH265SessionParametersCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeH265SessionParametersCreateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeH265SessionParametersCreateInfoKHR;
    static create(paramarg0: number): VkVideoEncodeH265SessionParametersCreateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeH265SessionParametersCreateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeH265SessionParametersCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeH265SessionParametersCreateInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxStdPPSCount(paramarg0: number): number;
    static nmaxStdPPSCount(paramarg0: number, paramarg1: number): void;
    static nmaxStdSPSCount(paramarg0: number): number;
    static nmaxStdSPSCount(paramarg0: number, paramarg1: number): void;
    static nmaxStdVPSCount(paramarg0: number): number;
    static nmaxStdVPSCount(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npParametersAddInfo(paramarg0: number): VkVideoEncodeH265SessionParametersAddInfoKHR;
    static npParametersAddInfo(paramarg0: number, paramarg1: VkVideoEncodeH265SessionParametersAddInfoKHR): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeH265SessionParametersCreateInfoKHR;
    maxStdPPSCount(): number;
    maxStdPPSCount(arg0: number): VkVideoEncodeH265SessionParametersCreateInfoKHR;
    maxStdSPSCount(): number;
    maxStdSPSCount(arg0: number): VkVideoEncodeH265SessionParametersCreateInfoKHR;
    maxStdVPSCount(): number;
    maxStdVPSCount(arg0: number): VkVideoEncodeH265SessionParametersCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeH265SessionParametersCreateInfoKHR;
    pParametersAddInfo(): VkVideoEncodeH265SessionParametersAddInfoKHR;
    pParametersAddInfo(arg0: VkVideoEncodeH265SessionParametersAddInfoKHR): VkVideoEncodeH265SessionParametersCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoEncodeH265SessionParametersCreateInfoKHR;
    sType$Default(): VkVideoEncodeH265SessionParametersCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: VkVideoEncodeH265SessionParametersAddInfoKHR): VkVideoEncodeH265SessionParametersCreateInfoKHR;
    set(arg0: VkVideoEncodeH265SessionParametersCreateInfoKHR): VkVideoEncodeH265SessionParametersCreateInfoKHR;
    sizeof(): number;
}