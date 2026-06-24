import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkVideoEncodeAV1QualityLevelPropertiesKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeAV1QualityLevelPropertiesKHR.d.ts'
import type { VkVideoEncodeH264QualityLevelPropertiesKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH264QualityLevelPropertiesKHR.d.ts'
import type { VkVideoEncodeH265QualityLevelPropertiesKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH265QualityLevelPropertiesKHR.d.ts'
export class VkVideoEncodeQualityLevelPropertiesKHR extends Struct<VkVideoEncodeQualityLevelPropertiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PREFERREDRATECONTROLLAYERCOUNT: number;
    static PREFERREDRATECONTROLMODE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkVideoEncodeQualityLevelPropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeQualityLevelPropertiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeQualityLevelPropertiesKHR;
    static create(paramarg0: number): VkVideoEncodeQualityLevelPropertiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeQualityLevelPropertiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeQualityLevelPropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeQualityLevelPropertiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npreferredRateControlLayerCount(paramarg0: number): number;
    static npreferredRateControlMode(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeQualityLevelPropertiesKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeQualityLevelPropertiesKHR;
    pNext(arg0: VkVideoEncodeAV1QualityLevelPropertiesKHR): VkVideoEncodeQualityLevelPropertiesKHR;
    pNext(arg0: VkVideoEncodeH264QualityLevelPropertiesKHR): VkVideoEncodeQualityLevelPropertiesKHR;
    pNext(arg0: VkVideoEncodeH265QualityLevelPropertiesKHR): VkVideoEncodeQualityLevelPropertiesKHR;
    preferredRateControlLayerCount(): number;
    preferredRateControlMode(): number;
    sType(): number;
    sType(arg0: number): VkVideoEncodeQualityLevelPropertiesKHR;
    sType$Default(): VkVideoEncodeQualityLevelPropertiesKHR;
    set(arg0: number, arg1: number): VkVideoEncodeQualityLevelPropertiesKHR;
    set(arg0: VkVideoEncodeQualityLevelPropertiesKHR): VkVideoEncodeQualityLevelPropertiesKHR;
    sizeof(): number;
}