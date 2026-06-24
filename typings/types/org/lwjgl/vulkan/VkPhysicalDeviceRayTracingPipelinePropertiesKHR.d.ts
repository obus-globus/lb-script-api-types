import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceRayTracingPipelinePropertiesKHR extends Struct<VkPhysicalDeviceRayTracingPipelinePropertiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXRAYDISPATCHINVOCATIONCOUNT: number;
    static MAXRAYHITATTRIBUTESIZE: number;
    static MAXRAYRECURSIONDEPTH: number;
    static MAXSHADERGROUPSTRIDE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHADERGROUPBASEALIGNMENT: number;
    static SHADERGROUPHANDLEALIGNMENT: number;
    static SHADERGROUPHANDLECAPTUREREPLAYSIZE: number;
    static SHADERGROUPHANDLESIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceRayTracingPipelinePropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceRayTracingPipelinePropertiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceRayTracingPipelinePropertiesKHR;
    static create(paramarg0: number): VkPhysicalDeviceRayTracingPipelinePropertiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceRayTracingPipelinePropertiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceRayTracingPipelinePropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceRayTracingPipelinePropertiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxRayDispatchInvocationCount(paramarg0: number): number;
    static nmaxRayHitAttributeSize(paramarg0: number): number;
    static nmaxRayRecursionDepth(paramarg0: number): number;
    static nmaxShaderGroupStride(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshaderGroupBaseAlignment(paramarg0: number): number;
    static nshaderGroupHandleAlignment(paramarg0: number): number;
    static nshaderGroupHandleCaptureReplaySize(paramarg0: number): number;
    static nshaderGroupHandleSize(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceRayTracingPipelinePropertiesKHR;
    maxRayDispatchInvocationCount(): number;
    maxRayHitAttributeSize(): number;
    maxRayRecursionDepth(): number;
    maxShaderGroupStride(): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceRayTracingPipelinePropertiesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceRayTracingPipelinePropertiesKHR;
    sType$Default(): VkPhysicalDeviceRayTracingPipelinePropertiesKHR;
    set(arg0: number, arg1: number): VkPhysicalDeviceRayTracingPipelinePropertiesKHR;
    set(arg0: VkPhysicalDeviceRayTracingPipelinePropertiesKHR): VkPhysicalDeviceRayTracingPipelinePropertiesKHR;
    shaderGroupBaseAlignment(): number;
    shaderGroupHandleAlignment(): number;
    shaderGroupHandleCaptureReplaySize(): number;
    shaderGroupHandleSize(): number;
    sizeof(): number;
}