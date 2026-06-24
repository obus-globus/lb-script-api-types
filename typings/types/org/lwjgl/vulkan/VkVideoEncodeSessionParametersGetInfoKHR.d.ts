import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkVideoEncodeH264SessionParametersGetInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH264SessionParametersGetInfoKHR.d.ts'
import type { VkVideoEncodeH265SessionParametersGetInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH265SessionParametersGetInfoKHR.d.ts'
export class VkVideoEncodeSessionParametersGetInfoKHR extends Struct<VkVideoEncodeSessionParametersGetInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static VIDEOSESSIONPARAMETERS: number;
    static calloc(): VkVideoEncodeSessionParametersGetInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeSessionParametersGetInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeSessionParametersGetInfoKHR;
    static create(paramarg0: number): VkVideoEncodeSessionParametersGetInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeSessionParametersGetInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeSessionParametersGetInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeSessionParametersGetInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nvideoSessionParameters(paramarg0: number): number;
    static nvideoSessionParameters(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeSessionParametersGetInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeSessionParametersGetInfoKHR;
    pNext(arg0: VkVideoEncodeH264SessionParametersGetInfoKHR): VkVideoEncodeSessionParametersGetInfoKHR;
    pNext(arg0: VkVideoEncodeH265SessionParametersGetInfoKHR): VkVideoEncodeSessionParametersGetInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoEncodeSessionParametersGetInfoKHR;
    sType$Default(): VkVideoEncodeSessionParametersGetInfoKHR;
    set(arg0: number, arg1: number, arg2: number): VkVideoEncodeSessionParametersGetInfoKHR;
    set(arg0: VkVideoEncodeSessionParametersGetInfoKHR): VkVideoEncodeSessionParametersGetInfoKHR;
    sizeof(): number;
    videoSessionParameters(): number;
    videoSessionParameters(arg0: number): VkVideoEncodeSessionParametersGetInfoKHR;
}