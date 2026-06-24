import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkVideoEncodeAV1RateControlInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeAV1RateControlInfoKHR.d.ts'
import type { VkVideoEncodeH264RateControlInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH264RateControlInfoKHR.d.ts'
import type { VkVideoEncodeH265RateControlInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH265RateControlInfoKHR.d.ts'
import type { VkVideoEncodeQualityLevelInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeQualityLevelInfoKHR.d.ts'
import type { VkVideoEncodeRateControlInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeRateControlInfoKHR.d.ts'
export class VkVideoCodingControlInfoKHR extends Struct<VkVideoCodingControlInfoKHR> implements NativeResource {
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
    static calloc(): VkVideoCodingControlInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoCodingControlInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoCodingControlInfoKHR;
    static create(paramarg0: number): VkVideoCodingControlInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoCodingControlInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoCodingControlInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoCodingControlInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoCodingControlInfoKHR;
    flags(): number;
    flags(arg0: number): VkVideoCodingControlInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoCodingControlInfoKHR;
    pNext(arg0: VkVideoEncodeAV1RateControlInfoKHR): VkVideoCodingControlInfoKHR;
    pNext(arg0: VkVideoEncodeH264RateControlInfoKHR): VkVideoCodingControlInfoKHR;
    pNext(arg0: VkVideoEncodeH265RateControlInfoKHR): VkVideoCodingControlInfoKHR;
    pNext(arg0: VkVideoEncodeQualityLevelInfoKHR): VkVideoCodingControlInfoKHR;
    pNext(arg0: VkVideoEncodeRateControlInfoKHR): VkVideoCodingControlInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoCodingControlInfoKHR;
    sType$Default(): VkVideoCodingControlInfoKHR;
    set(arg0: number, arg1: number, arg2: number): VkVideoCodingControlInfoKHR;
    set(arg0: VkVideoCodingControlInfoKHR): VkVideoCodingControlInfoKHR;
    sizeof(): number;
}