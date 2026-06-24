import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkAccelerationStructureGeometryAabbsDataKHR } from '../../../org/lwjgl/vulkan/VkAccelerationStructureGeometryAabbsDataKHR.d.ts'
import type { VkAccelerationStructureGeometryInstancesDataKHR } from '../../../org/lwjgl/vulkan/VkAccelerationStructureGeometryInstancesDataKHR.d.ts'
import type { VkAccelerationStructureGeometryTrianglesDataKHR } from '../../../org/lwjgl/vulkan/VkAccelerationStructureGeometryTrianglesDataKHR.d.ts'
export class VkAccelerationStructureGeometryDataKHR extends Struct<VkAccelerationStructureGeometryDataKHR> implements NativeResource {
    static AABBS: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static INSTANCES: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static TRIANGLES: number;
    static calloc(): VkAccelerationStructureGeometryDataKHR;
    static calloc(paramarg0: MemoryStack): VkAccelerationStructureGeometryDataKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAccelerationStructureGeometryDataKHR;
    static create(paramarg0: number): VkAccelerationStructureGeometryDataKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAccelerationStructureGeometryDataKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAccelerationStructureGeometryDataKHR;
    static malloc(paramarg0: MemoryStack): VkAccelerationStructureGeometryDataKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naabbs(paramarg0: number): VkAccelerationStructureGeometryAabbsDataKHR;
    static naabbs(paramarg0: number, paramarg1: VkAccelerationStructureGeometryAabbsDataKHR): void;
    static ninstances(paramarg0: number): VkAccelerationStructureGeometryInstancesDataKHR;
    static ninstances(paramarg0: number, paramarg1: VkAccelerationStructureGeometryInstancesDataKHR): void;
    static ntriangles(paramarg0: number): VkAccelerationStructureGeometryTrianglesDataKHR;
    static ntriangles(paramarg0: number, paramarg1: VkAccelerationStructureGeometryTrianglesDataKHR): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    aabbs(): VkAccelerationStructureGeometryAabbsDataKHR;
    aabbs(arg0: (param0: VkAccelerationStructureGeometryAabbsDataKHR) => void): VkAccelerationStructureGeometryDataKHR;
    aabbs(arg0: VkAccelerationStructureGeometryAabbsDataKHR): VkAccelerationStructureGeometryDataKHR;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkAccelerationStructureGeometryDataKHR;
    instances(): VkAccelerationStructureGeometryInstancesDataKHR;
    instances(arg0: (param0: VkAccelerationStructureGeometryInstancesDataKHR) => void): VkAccelerationStructureGeometryDataKHR;
    instances(arg0: VkAccelerationStructureGeometryInstancesDataKHR): VkAccelerationStructureGeometryDataKHR;
    set(arg0: VkAccelerationStructureGeometryDataKHR): VkAccelerationStructureGeometryDataKHR;
    sizeof(): number;
    triangles(): VkAccelerationStructureGeometryTrianglesDataKHR;
    triangles(arg0: (param0: VkAccelerationStructureGeometryTrianglesDataKHR) => void): VkAccelerationStructureGeometryDataKHR;
    triangles(arg0: VkAccelerationStructureGeometryTrianglesDataKHR): VkAccelerationStructureGeometryDataKHR;
}