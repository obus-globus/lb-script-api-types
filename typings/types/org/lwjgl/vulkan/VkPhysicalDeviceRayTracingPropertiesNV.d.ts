import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceRayTracingPropertiesNV extends Struct<VkPhysicalDeviceRayTracingPropertiesNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXDESCRIPTORSETACCELERATIONSTRUCTURES: number;
    static MAXGEOMETRYCOUNT: number;
    static MAXINSTANCECOUNT: number;
    static MAXRECURSIONDEPTH: number;
    static MAXSHADERGROUPSTRIDE: number;
    static MAXTRIANGLECOUNT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHADERGROUPBASEALIGNMENT: number;
    static SHADERGROUPHANDLESIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceRayTracingPropertiesNV;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceRayTracingPropertiesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceRayTracingPropertiesNV;
    static create(paramarg0: number): VkPhysicalDeviceRayTracingPropertiesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceRayTracingPropertiesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceRayTracingPropertiesNV;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceRayTracingPropertiesNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxDescriptorSetAccelerationStructures(paramarg0: number): number;
    static nmaxGeometryCount(paramarg0: number): number;
    static nmaxInstanceCount(paramarg0: number): number;
    static nmaxRecursionDepth(paramarg0: number): number;
    static nmaxShaderGroupStride(paramarg0: number): number;
    static nmaxTriangleCount(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshaderGroupBaseAlignment(paramarg0: number): number;
    static nshaderGroupHandleSize(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceRayTracingPropertiesNV;
    maxDescriptorSetAccelerationStructures(): number;
    maxGeometryCount(): number;
    maxInstanceCount(): number;
    maxRecursionDepth(): number;
    maxShaderGroupStride(): number;
    maxTriangleCount(): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceRayTracingPropertiesNV;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceRayTracingPropertiesNV;
    sType$Default(): VkPhysicalDeviceRayTracingPropertiesNV;
    set(arg0: number, arg1: number): VkPhysicalDeviceRayTracingPropertiesNV;
    set(arg0: VkPhysicalDeviceRayTracingPropertiesNV): VkPhysicalDeviceRayTracingPropertiesNV;
    shaderGroupBaseAlignment(): number;
    shaderGroupHandleSize(): number;
    sizeof(): number;
}