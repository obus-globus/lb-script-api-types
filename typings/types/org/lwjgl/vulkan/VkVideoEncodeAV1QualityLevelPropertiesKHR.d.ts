import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkVideoEncodeAV1QIndexKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeAV1QIndexKHR.d.ts'
export class VkVideoEncodeAV1QualityLevelPropertiesKHR extends Struct<VkVideoEncodeAV1QualityLevelPropertiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PREFERREDBIDIRECTIONALCOMPOUNDREFERENCENAMEMASK: number;
    static PREFERREDCONSECUTIVEBIPREDICTIVEFRAMECOUNT: number;
    static PREFERREDCONSTANTQINDEX: number;
    static PREFERREDGOPFRAMECOUNT: number;
    static PREFERREDKEYFRAMEPERIOD: number;
    static PREFERREDMAXBIDIRECTIONALCOMPOUNDGROUP1REFERENCECOUNT: number;
    static PREFERREDMAXBIDIRECTIONALCOMPOUNDGROUP2REFERENCECOUNT: number;
    static PREFERREDMAXBIDIRECTIONALCOMPOUNDREFERENCECOUNT: number;
    static PREFERREDMAXSINGLEREFERENCECOUNT: number;
    static PREFERREDMAXUNIDIRECTIONALCOMPOUNDGROUP1REFERENCECOUNT: number;
    static PREFERREDMAXUNIDIRECTIONALCOMPOUNDREFERENCECOUNT: number;
    static PREFERREDRATECONTROLFLAGS: number;
    static PREFERREDSINGLEREFERENCENAMEMASK: number;
    static PREFERREDTEMPORALLAYERCOUNT: number;
    static PREFERREDUNIDIRECTIONALCOMPOUNDREFERENCENAMEMASK: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkVideoEncodeAV1QualityLevelPropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeAV1QualityLevelPropertiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeAV1QualityLevelPropertiesKHR;
    static create(paramarg0: number): VkVideoEncodeAV1QualityLevelPropertiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeAV1QualityLevelPropertiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeAV1QualityLevelPropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeAV1QualityLevelPropertiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npreferredBidirectionalCompoundReferenceNameMask(paramarg0: number): number;
    static npreferredConsecutiveBipredictiveFrameCount(paramarg0: number): number;
    static npreferredConstantQIndex(paramarg0: number): VkVideoEncodeAV1QIndexKHR;
    static npreferredGopFrameCount(paramarg0: number): number;
    static npreferredKeyFramePeriod(paramarg0: number): number;
    static npreferredMaxBidirectionalCompoundGroup1ReferenceCount(paramarg0: number): number;
    static npreferredMaxBidirectionalCompoundGroup2ReferenceCount(paramarg0: number): number;
    static npreferredMaxBidirectionalCompoundReferenceCount(paramarg0: number): number;
    static npreferredMaxSingleReferenceCount(paramarg0: number): number;
    static npreferredMaxUnidirectionalCompoundGroup1ReferenceCount(paramarg0: number): number;
    static npreferredMaxUnidirectionalCompoundReferenceCount(paramarg0: number): number;
    static npreferredRateControlFlags(paramarg0: number): number;
    static npreferredSingleReferenceNameMask(paramarg0: number): number;
    static npreferredTemporalLayerCount(paramarg0: number): number;
    static npreferredUnidirectionalCompoundReferenceNameMask(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeAV1QualityLevelPropertiesKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeAV1QualityLevelPropertiesKHR;
    preferredBidirectionalCompoundReferenceNameMask(): number;
    preferredConsecutiveBipredictiveFrameCount(): number;
    preferredConstantQIndex(): VkVideoEncodeAV1QIndexKHR;
    preferredGopFrameCount(): number;
    preferredKeyFramePeriod(): number;
    preferredMaxBidirectionalCompoundGroup1ReferenceCount(): number;
    preferredMaxBidirectionalCompoundGroup2ReferenceCount(): number;
    preferredMaxBidirectionalCompoundReferenceCount(): number;
    preferredMaxSingleReferenceCount(): number;
    preferredMaxUnidirectionalCompoundGroup1ReferenceCount(): number;
    preferredMaxUnidirectionalCompoundReferenceCount(): number;
    preferredRateControlFlags(): number;
    preferredSingleReferenceNameMask(): number;
    preferredTemporalLayerCount(): number;
    preferredUnidirectionalCompoundReferenceNameMask(): number;
    sType(): number;
    sType(arg0: number): VkVideoEncodeAV1QualityLevelPropertiesKHR;
    sType$Default(): VkVideoEncodeAV1QualityLevelPropertiesKHR;
    set(arg0: number, arg1: number): VkVideoEncodeAV1QualityLevelPropertiesKHR;
    set(arg0: VkVideoEncodeAV1QualityLevelPropertiesKHR): VkVideoEncodeAV1QualityLevelPropertiesKHR;
    sizeof(): number;
}