import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceFragmentShadingRateFeaturesKHR extends Struct<VkPhysicalDeviceFragmentShadingRateFeaturesKHR> implements NativeResource {
    static ALIGNOF: number;
    static ATTACHMENTFRAGMENTSHADINGRATE: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PIPELINEFRAGMENTSHADINGRATE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRIMITIVEFRAGMENTSHADINGRATE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceFragmentShadingRateFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceFragmentShadingRateFeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceFragmentShadingRateFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceFragmentShadingRateFeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceFragmentShadingRateFeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceFragmentShadingRateFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceFragmentShadingRateFeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nattachmentFragmentShadingRate(paramarg0: number): number;
    static nattachmentFragmentShadingRate(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npipelineFragmentShadingRate(paramarg0: number): number;
    static npipelineFragmentShadingRate(paramarg0: number, paramarg1: number): void;
    static nprimitiveFragmentShadingRate(paramarg0: number): number;
    static nprimitiveFragmentShadingRate(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    attachmentFragmentShadingRate(): boolean;
    attachmentFragmentShadingRate(arg0: boolean): VkPhysicalDeviceFragmentShadingRateFeaturesKHR;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceFragmentShadingRateFeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceFragmentShadingRateFeaturesKHR;
    pipelineFragmentShadingRate(): boolean;
    pipelineFragmentShadingRate(arg0: boolean): VkPhysicalDeviceFragmentShadingRateFeaturesKHR;
    primitiveFragmentShadingRate(): boolean;
    primitiveFragmentShadingRate(arg0: boolean): VkPhysicalDeviceFragmentShadingRateFeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceFragmentShadingRateFeaturesKHR;
    sType$Default(): VkPhysicalDeviceFragmentShadingRateFeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): VkPhysicalDeviceFragmentShadingRateFeaturesKHR;
    set(arg0: VkPhysicalDeviceFragmentShadingRateFeaturesKHR): VkPhysicalDeviceFragmentShadingRateFeaturesKHR;
    sizeof(): number;
}