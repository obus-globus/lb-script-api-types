import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceRayTracingMaintenance1FeaturesKHR extends Struct<VkPhysicalDeviceRayTracingMaintenance1FeaturesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RAYTRACINGMAINTENANCE1: number;
    static RAYTRACINGPIPELINETRACERAYSINDIRECT2: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceRayTracingMaintenance1FeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceRayTracingMaintenance1FeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceRayTracingMaintenance1FeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceRayTracingMaintenance1FeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceRayTracingMaintenance1FeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceRayTracingMaintenance1FeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceRayTracingMaintenance1FeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nrayTracingMaintenance1(paramarg0: number): number;
    static nrayTracingMaintenance1(paramarg0: number, paramarg1: number): void;
    static nrayTracingPipelineTraceRaysIndirect2(paramarg0: number): number;
    static nrayTracingPipelineTraceRaysIndirect2(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceRayTracingMaintenance1FeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceRayTracingMaintenance1FeaturesKHR;
    rayTracingMaintenance1(): boolean;
    rayTracingMaintenance1(arg0: boolean): VkPhysicalDeviceRayTracingMaintenance1FeaturesKHR;
    rayTracingPipelineTraceRaysIndirect2(): boolean;
    rayTracingPipelineTraceRaysIndirect2(arg0: boolean): VkPhysicalDeviceRayTracingMaintenance1FeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceRayTracingMaintenance1FeaturesKHR;
    sType$Default(): VkPhysicalDeviceRayTracingMaintenance1FeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean): VkPhysicalDeviceRayTracingMaintenance1FeaturesKHR;
    set(arg0: VkPhysicalDeviceRayTracingMaintenance1FeaturesKHR): VkPhysicalDeviceRayTracingMaintenance1FeaturesKHR;
    sizeof(): number;
}