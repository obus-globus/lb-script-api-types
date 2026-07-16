import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkVideoDecodeAV1ProfileInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeAV1ProfileInfoKHR.d.ts'
import type { VkVideoDecodeH264ProfileInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeH264ProfileInfoKHR.d.ts'
import type { VkVideoDecodeH265ProfileInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeH265ProfileInfoKHR.d.ts'
import type { VkVideoDecodeUsageInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeUsageInfoKHR.d.ts'
import type { VkVideoDecodeVP9ProfileInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeVP9ProfileInfoKHR.d.ts'
import type { VkVideoEncodeAV1ProfileInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeAV1ProfileInfoKHR.d.ts'
import type { VkVideoEncodeH264ProfileInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH264ProfileInfoKHR.d.ts'
import type { VkVideoEncodeH265ProfileInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH265ProfileInfoKHR.d.ts'
import type { VkVideoEncodeProfileRgbConversionInfoVALVE } from '../../../org/lwjgl/vulkan/VkVideoEncodeProfileRgbConversionInfoVALVE.d.ts'
import type { VkVideoEncodeUsageInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeUsageInfoKHR.d.ts'
export class VkVideoProfileInfoKHR extends Struct<VkVideoProfileInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CHROMABITDEPTH: number;
    static CHROMASUBSAMPLING: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LUMABITDEPTH: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static VIDEOCODECOPERATION: number;
    static calloc(): VkVideoProfileInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoProfileInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoProfileInfoKHR;
    static create(paramarg0: number): VkVideoProfileInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoProfileInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoProfileInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoProfileInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nchromaBitDepth(paramarg0: number): number;
    static nchromaBitDepth(paramarg0: number, paramarg1: number): void;
    static nchromaSubsampling(paramarg0: number): number;
    static nchromaSubsampling(paramarg0: number, paramarg1: number): void;
    static nlumaBitDepth(paramarg0: number): number;
    static nlumaBitDepth(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nvideoCodecOperation(paramarg0: number): number;
    static nvideoCodecOperation(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    chromaBitDepth(): number;
    chromaBitDepth(arg0: number): VkVideoProfileInfoKHR;
    chromaSubsampling(): number;
    chromaSubsampling(arg0: number): VkVideoProfileInfoKHR;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoProfileInfoKHR;
    lumaBitDepth(): number;
    lumaBitDepth(arg0: number): VkVideoProfileInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoProfileInfoKHR;
    pNext(arg0: VkVideoDecodeAV1ProfileInfoKHR): VkVideoProfileInfoKHR;
    pNext(arg0: VkVideoDecodeH264ProfileInfoKHR): VkVideoProfileInfoKHR;
    pNext(arg0: VkVideoDecodeH265ProfileInfoKHR): VkVideoProfileInfoKHR;
    pNext(arg0: VkVideoDecodeUsageInfoKHR): VkVideoProfileInfoKHR;
    pNext(arg0: VkVideoDecodeVP9ProfileInfoKHR): VkVideoProfileInfoKHR;
    pNext(arg0: VkVideoEncodeAV1ProfileInfoKHR): VkVideoProfileInfoKHR;
    pNext(arg0: VkVideoEncodeH264ProfileInfoKHR): VkVideoProfileInfoKHR;
    pNext(arg0: VkVideoEncodeH265ProfileInfoKHR): VkVideoProfileInfoKHR;
    pNext(arg0: VkVideoEncodeProfileRgbConversionInfoVALVE): VkVideoProfileInfoKHR;
    pNext(arg0: VkVideoEncodeUsageInfoKHR): VkVideoProfileInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoProfileInfoKHR;
    sType$Default(): VkVideoProfileInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): VkVideoProfileInfoKHR;
    set(arg0: VkVideoProfileInfoKHR): VkVideoProfileInfoKHR;
    sizeof(): number;
    videoCodecOperation(): number;
    videoCodecOperation(arg0: number): VkVideoProfileInfoKHR;
}