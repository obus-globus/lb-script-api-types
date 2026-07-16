import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkVideoEncodeH264QpKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH264QpKHR.d.ts'
export class VkVideoEncodeH264QualityLevelPropertiesKHR extends Struct<VkVideoEncodeH264QualityLevelPropertiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PREFERREDCONSECUTIVEBFRAMECOUNT: number;
    static PREFERREDCONSTANTQP: number;
    static PREFERREDGOPFRAMECOUNT: number;
    static PREFERREDIDRPERIOD: number;
    static PREFERREDMAXL0REFERENCECOUNT: number;
    static PREFERREDMAXL1REFERENCECOUNT: number;
    static PREFERREDRATECONTROLFLAGS: number;
    static PREFERREDSTDENTROPYCODINGMODEFLAG: number;
    static PREFERREDTEMPORALLAYERCOUNT: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkVideoEncodeH264QualityLevelPropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeH264QualityLevelPropertiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeH264QualityLevelPropertiesKHR;
    static create(paramarg0: number): VkVideoEncodeH264QualityLevelPropertiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeH264QualityLevelPropertiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeH264QualityLevelPropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeH264QualityLevelPropertiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npreferredConsecutiveBFrameCount(paramarg0: number): number;
    static npreferredConstantQp(paramarg0: number): VkVideoEncodeH264QpKHR;
    static npreferredGopFrameCount(paramarg0: number): number;
    static npreferredIdrPeriod(paramarg0: number): number;
    static npreferredMaxL0ReferenceCount(paramarg0: number): number;
    static npreferredMaxL1ReferenceCount(paramarg0: number): number;
    static npreferredRateControlFlags(paramarg0: number): number;
    static npreferredStdEntropyCodingModeFlag(paramarg0: number): number;
    static npreferredTemporalLayerCount(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeH264QualityLevelPropertiesKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeH264QualityLevelPropertiesKHR;
    preferredConsecutiveBFrameCount(): number;
    preferredConstantQp(): VkVideoEncodeH264QpKHR;
    preferredGopFrameCount(): number;
    preferredIdrPeriod(): number;
    preferredMaxL0ReferenceCount(): number;
    preferredMaxL1ReferenceCount(): number;
    preferredRateControlFlags(): number;
    preferredStdEntropyCodingModeFlag(): boolean;
    preferredTemporalLayerCount(): number;
    sType(): number;
    sType(arg0: number): VkVideoEncodeH264QualityLevelPropertiesKHR;
    sType$Default(): VkVideoEncodeH264QualityLevelPropertiesKHR;
    set(arg0: number, arg1: number): VkVideoEncodeH264QualityLevelPropertiesKHR;
    set(arg0: VkVideoEncodeH264QualityLevelPropertiesKHR): VkVideoEncodeH264QualityLevelPropertiesKHR;
    sizeof(): number;
}