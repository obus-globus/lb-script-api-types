import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkVideoEncodeH264RateControlInfoKHR extends Struct<VkVideoEncodeH264RateControlInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CONSECUTIVEBFRAMECOUNT: number;
    static FLAGS: number;
    static GOPFRAMECOUNT: number;
    static IDRPERIOD: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static TEMPORALLAYERCOUNT: number;
    static calloc(): VkVideoEncodeH264RateControlInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeH264RateControlInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeH264RateControlInfoKHR;
    static create(paramarg0: number): VkVideoEncodeH264RateControlInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeH264RateControlInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeH264RateControlInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeH264RateControlInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nconsecutiveBFrameCount(paramarg0: number): number;
    static nconsecutiveBFrameCount(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static ngopFrameCount(paramarg0: number): number;
    static ngopFrameCount(paramarg0: number, paramarg1: number): void;
    static nidrPeriod(paramarg0: number): number;
    static nidrPeriod(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntemporalLayerCount(paramarg0: number): number;
    static ntemporalLayerCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    consecutiveBFrameCount(): number;
    consecutiveBFrameCount(arg0: number): VkVideoEncodeH264RateControlInfoKHR;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeH264RateControlInfoKHR;
    flags(): number;
    flags(arg0: number): VkVideoEncodeH264RateControlInfoKHR;
    gopFrameCount(): number;
    gopFrameCount(arg0: number): VkVideoEncodeH264RateControlInfoKHR;
    idrPeriod(): number;
    idrPeriod(arg0: number): VkVideoEncodeH264RateControlInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeH264RateControlInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoEncodeH264RateControlInfoKHR;
    sType$Default(): VkVideoEncodeH264RateControlInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): VkVideoEncodeH264RateControlInfoKHR;
    set(arg0: VkVideoEncodeH264RateControlInfoKHR): VkVideoEncodeH264RateControlInfoKHR;
    sizeof(): number;
    temporalLayerCount(): number;
    temporalLayerCount(arg0: number): VkVideoEncodeH264RateControlInfoKHR;
}