import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkVideoDecodeAV1SessionParametersCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeAV1SessionParametersCreateInfoKHR.d.ts'
import type { VkVideoDecodeH264SessionParametersCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeH264SessionParametersCreateInfoKHR.d.ts'
import type { VkVideoDecodeH265SessionParametersCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeH265SessionParametersCreateInfoKHR.d.ts'
import type { VkVideoEncodeAV1SessionParametersCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeAV1SessionParametersCreateInfoKHR.d.ts'
import type { VkVideoEncodeH264SessionParametersCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH264SessionParametersCreateInfoKHR.d.ts'
import type { VkVideoEncodeH265SessionParametersCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH265SessionParametersCreateInfoKHR.d.ts'
import type { VkVideoEncodeQualityLevelInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeQualityLevelInfoKHR.d.ts'
import type { VkVideoEncodeQuantizationMapSessionParametersCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeQuantizationMapSessionParametersCreateInfoKHR.d.ts'
export class VkVideoSessionParametersCreateInfoKHR extends Struct<VkVideoSessionParametersCreateInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static VIDEOSESSION: number;
    static VIDEOSESSIONPARAMETERSTEMPLATE: number;
    static calloc(): VkVideoSessionParametersCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoSessionParametersCreateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoSessionParametersCreateInfoKHR;
    static create(paramarg0: number): VkVideoSessionParametersCreateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoSessionParametersCreateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoSessionParametersCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoSessionParametersCreateInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nvideoSession(paramarg0: number): number;
    static nvideoSession(paramarg0: number, paramarg1: number): void;
    static nvideoSessionParametersTemplate(paramarg0: number): number;
    static nvideoSessionParametersTemplate(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoSessionParametersCreateInfoKHR;
    flags(): number;
    flags(arg0: number): VkVideoSessionParametersCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoSessionParametersCreateInfoKHR;
    pNext(arg0: VkVideoDecodeAV1SessionParametersCreateInfoKHR): VkVideoSessionParametersCreateInfoKHR;
    pNext(arg0: VkVideoDecodeH264SessionParametersCreateInfoKHR): VkVideoSessionParametersCreateInfoKHR;
    pNext(arg0: VkVideoDecodeH265SessionParametersCreateInfoKHR): VkVideoSessionParametersCreateInfoKHR;
    pNext(arg0: VkVideoEncodeAV1SessionParametersCreateInfoKHR): VkVideoSessionParametersCreateInfoKHR;
    pNext(arg0: VkVideoEncodeH264SessionParametersCreateInfoKHR): VkVideoSessionParametersCreateInfoKHR;
    pNext(arg0: VkVideoEncodeH265SessionParametersCreateInfoKHR): VkVideoSessionParametersCreateInfoKHR;
    pNext(arg0: VkVideoEncodeQualityLevelInfoKHR): VkVideoSessionParametersCreateInfoKHR;
    pNext(arg0: VkVideoEncodeQuantizationMapSessionParametersCreateInfoKHR): VkVideoSessionParametersCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoSessionParametersCreateInfoKHR;
    sType$Default(): VkVideoSessionParametersCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkVideoSessionParametersCreateInfoKHR;
    set(arg0: VkVideoSessionParametersCreateInfoKHR): VkVideoSessionParametersCreateInfoKHR;
    sizeof(): number;
    videoSession(): number;
    videoSession(arg0: number): VkVideoSessionParametersCreateInfoKHR;
    videoSessionParametersTemplate(): number;
    videoSessionParametersTemplate(arg0: number): VkVideoSessionParametersCreateInfoKHR;
}