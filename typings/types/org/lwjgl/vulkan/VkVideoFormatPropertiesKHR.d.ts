import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkComponentMapping } from '../../../org/lwjgl/vulkan/VkComponentMapping.d.ts'
import type { VkVideoFormatAV1QuantizationMapPropertiesKHR } from '../../../org/lwjgl/vulkan/VkVideoFormatAV1QuantizationMapPropertiesKHR.d.ts'
import type { VkVideoFormatH265QuantizationMapPropertiesKHR } from '../../../org/lwjgl/vulkan/VkVideoFormatH265QuantizationMapPropertiesKHR.d.ts'
import type { VkVideoFormatQuantizationMapPropertiesKHR } from '../../../org/lwjgl/vulkan/VkVideoFormatQuantizationMapPropertiesKHR.d.ts'
export class VkVideoFormatPropertiesKHR extends Struct<VkVideoFormatPropertiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMPONENTMAPPING: number;
    static FORMAT: number;
    static IMAGECREATEFLAGS: number;
    static IMAGETILING: number;
    static IMAGETYPE: number;
    static IMAGEUSAGEFLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkVideoFormatPropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkVideoFormatPropertiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoFormatPropertiesKHR;
    static create(paramarg0: number): VkVideoFormatPropertiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoFormatPropertiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoFormatPropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkVideoFormatPropertiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncomponentMapping(paramarg0: number): VkComponentMapping;
    static nformat(paramarg0: number): number;
    static nimageCreateFlags(paramarg0: number): number;
    static nimageTiling(paramarg0: number): number;
    static nimageType(paramarg0: number): number;
    static nimageUsageFlags(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    componentMapping(): VkComponentMapping;
    create(arg0: number, arg1: ByteBuffer): VkVideoFormatPropertiesKHR;
    format(): number;
    imageCreateFlags(): number;
    imageTiling(): number;
    imageType(): number;
    imageUsageFlags(): number;
    pNext(): number;
    pNext(arg0: number): VkVideoFormatPropertiesKHR;
    pNext(arg0: VkVideoFormatAV1QuantizationMapPropertiesKHR): VkVideoFormatPropertiesKHR;
    pNext(arg0: VkVideoFormatH265QuantizationMapPropertiesKHR): VkVideoFormatPropertiesKHR;
    pNext(arg0: VkVideoFormatQuantizationMapPropertiesKHR): VkVideoFormatPropertiesKHR;
    sType(): number;
    sType(arg0: number): VkVideoFormatPropertiesKHR;
    sType$Default(): VkVideoFormatPropertiesKHR;
    set(arg0: number, arg1: number): VkVideoFormatPropertiesKHR;
    set(arg0: VkVideoFormatPropertiesKHR): VkVideoFormatPropertiesKHR;
    sizeof(): number;
}