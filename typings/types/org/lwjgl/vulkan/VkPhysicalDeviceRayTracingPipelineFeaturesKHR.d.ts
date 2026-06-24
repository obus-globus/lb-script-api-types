import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceRayTracingPipelineFeaturesKHR extends Struct<VkPhysicalDeviceRayTracingPipelineFeaturesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RAYTRACINGPIPELINE: number;
    static RAYTRACINGPIPELINESHADERGROUPHANDLECAPTUREREPLAY: number;
    static RAYTRACINGPIPELINESHADERGROUPHANDLECAPTUREREPLAYMIXED: number;
    static RAYTRACINGPIPELINETRACERAYSINDIRECT: number;
    static RAYTRAVERSALPRIMITIVECULLING: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceRayTracingPipelineFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceRayTracingPipelineFeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceRayTracingPipelineFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceRayTracingPipelineFeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceRayTracingPipelineFeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceRayTracingPipelineFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceRayTracingPipelineFeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nrayTracingPipeline(paramarg0: number): number;
    static nrayTracingPipeline(paramarg0: number, paramarg1: number): void;
    static nrayTracingPipelineShaderGroupHandleCaptureReplay(paramarg0: number): number;
    static nrayTracingPipelineShaderGroupHandleCaptureReplay(paramarg0: number, paramarg1: number): void;
    static nrayTracingPipelineShaderGroupHandleCaptureReplayMixed(paramarg0: number): number;
    static nrayTracingPipelineShaderGroupHandleCaptureReplayMixed(paramarg0: number, paramarg1: number): void;
    static nrayTracingPipelineTraceRaysIndirect(paramarg0: number): number;
    static nrayTracingPipelineTraceRaysIndirect(paramarg0: number, paramarg1: number): void;
    static nrayTraversalPrimitiveCulling(paramarg0: number): number;
    static nrayTraversalPrimitiveCulling(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceRayTracingPipelineFeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceRayTracingPipelineFeaturesKHR;
    rayTracingPipeline(): boolean;
    rayTracingPipeline(arg0: boolean): VkPhysicalDeviceRayTracingPipelineFeaturesKHR;
    rayTracingPipelineShaderGroupHandleCaptureReplay(): boolean;
    rayTracingPipelineShaderGroupHandleCaptureReplay(arg0: boolean): VkPhysicalDeviceRayTracingPipelineFeaturesKHR;
    rayTracingPipelineShaderGroupHandleCaptureReplayMixed(): boolean;
    rayTracingPipelineShaderGroupHandleCaptureReplayMixed(arg0: boolean): VkPhysicalDeviceRayTracingPipelineFeaturesKHR;
    rayTracingPipelineTraceRaysIndirect(): boolean;
    rayTracingPipelineTraceRaysIndirect(arg0: boolean): VkPhysicalDeviceRayTracingPipelineFeaturesKHR;
    rayTraversalPrimitiveCulling(): boolean;
    rayTraversalPrimitiveCulling(arg0: boolean): VkPhysicalDeviceRayTracingPipelineFeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceRayTracingPipelineFeaturesKHR;
    sType$Default(): VkPhysicalDeviceRayTracingPipelineFeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean): VkPhysicalDeviceRayTracingPipelineFeaturesKHR;
    set(arg0: VkPhysicalDeviceRayTracingPipelineFeaturesKHR): VkPhysicalDeviceRayTracingPipelineFeaturesKHR;
    sizeof(): number;
}