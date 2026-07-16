import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkAccelerationStructureGeometryMotionTrianglesDataNV } from '../../../org/lwjgl/vulkan/VkAccelerationStructureGeometryMotionTrianglesDataNV.d.ts'
import type { VkAccelerationStructureTrianglesDisplacementMicromapNV } from '../../../org/lwjgl/vulkan/VkAccelerationStructureTrianglesDisplacementMicromapNV.d.ts'
import type { VkAccelerationStructureTrianglesOpacityMicromapEXT } from '../../../org/lwjgl/vulkan/VkAccelerationStructureTrianglesOpacityMicromapEXT.d.ts'
import type { VkDeviceOrHostAddressConstKHR } from '../../../org/lwjgl/vulkan/VkDeviceOrHostAddressConstKHR.d.ts'
export class VkAccelerationStructureGeometryTrianglesDataKHR extends Struct<VkAccelerationStructureGeometryTrianglesDataKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static INDEXDATA: number;
    static INDEXTYPE: number;
    static MAXVERTEX: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static TRANSFORMDATA: number;
    static VERTEXDATA: number;
    static VERTEXFORMAT: number;
    static VERTEXSTRIDE: number;
    static calloc(): VkAccelerationStructureGeometryTrianglesDataKHR;
    static calloc(paramarg0: MemoryStack): VkAccelerationStructureGeometryTrianglesDataKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAccelerationStructureGeometryTrianglesDataKHR;
    static create(paramarg0: number): VkAccelerationStructureGeometryTrianglesDataKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAccelerationStructureGeometryTrianglesDataKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAccelerationStructureGeometryTrianglesDataKHR;
    static malloc(paramarg0: MemoryStack): VkAccelerationStructureGeometryTrianglesDataKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nindexData(paramarg0: number): VkDeviceOrHostAddressConstKHR;
    static nindexData(paramarg0: number, paramarg1: VkDeviceOrHostAddressConstKHR): void;
    static nindexType(paramarg0: number): number;
    static nindexType(paramarg0: number, paramarg1: number): void;
    static nmaxVertex(paramarg0: number): number;
    static nmaxVertex(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntransformData(paramarg0: number): VkDeviceOrHostAddressConstKHR;
    static ntransformData(paramarg0: number, paramarg1: VkDeviceOrHostAddressConstKHR): void;
    static nvertexData(paramarg0: number): VkDeviceOrHostAddressConstKHR;
    static nvertexData(paramarg0: number, paramarg1: VkDeviceOrHostAddressConstKHR): void;
    static nvertexFormat(paramarg0: number): number;
    static nvertexFormat(paramarg0: number, paramarg1: number): void;
    static nvertexStride(paramarg0: number): number;
    static nvertexStride(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkAccelerationStructureGeometryTrianglesDataKHR;
    indexData(): VkDeviceOrHostAddressConstKHR;
    indexData(arg0: (param0: VkDeviceOrHostAddressConstKHR) => void): VkAccelerationStructureGeometryTrianglesDataKHR;
    indexData(arg0: VkDeviceOrHostAddressConstKHR): VkAccelerationStructureGeometryTrianglesDataKHR;
    indexType(): number;
    indexType(arg0: number): VkAccelerationStructureGeometryTrianglesDataKHR;
    maxVertex(): number;
    maxVertex(arg0: number): VkAccelerationStructureGeometryTrianglesDataKHR;
    pNext(): number;
    pNext(arg0: number): VkAccelerationStructureGeometryTrianglesDataKHR;
    pNext(arg0: VkAccelerationStructureGeometryMotionTrianglesDataNV): VkAccelerationStructureGeometryTrianglesDataKHR;
    pNext(arg0: VkAccelerationStructureTrianglesDisplacementMicromapNV): VkAccelerationStructureGeometryTrianglesDataKHR;
    pNext(arg0: VkAccelerationStructureTrianglesOpacityMicromapEXT): VkAccelerationStructureGeometryTrianglesDataKHR;
    sType(): number;
    sType(arg0: number): VkAccelerationStructureGeometryTrianglesDataKHR;
    sType$Default(): VkAccelerationStructureGeometryTrianglesDataKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: VkDeviceOrHostAddressConstKHR, arg4: number, arg5: number, arg6: number, arg7: VkDeviceOrHostAddressConstKHR, arg8: VkDeviceOrHostAddressConstKHR): VkAccelerationStructureGeometryTrianglesDataKHR;
    set(arg0: VkAccelerationStructureGeometryTrianglesDataKHR): VkAccelerationStructureGeometryTrianglesDataKHR;
    sizeof(): number;
    transformData(): VkDeviceOrHostAddressConstKHR;
    transformData(arg0: (param0: VkDeviceOrHostAddressConstKHR) => void): VkAccelerationStructureGeometryTrianglesDataKHR;
    transformData(arg0: VkDeviceOrHostAddressConstKHR): VkAccelerationStructureGeometryTrianglesDataKHR;
    vertexData(): VkDeviceOrHostAddressConstKHR;
    vertexData(arg0: (param0: VkDeviceOrHostAddressConstKHR) => void): VkAccelerationStructureGeometryTrianglesDataKHR;
    vertexData(arg0: VkDeviceOrHostAddressConstKHR): VkAccelerationStructureGeometryTrianglesDataKHR;
    vertexFormat(): number;
    vertexFormat(arg0: number): VkAccelerationStructureGeometryTrianglesDataKHR;
    vertexStride(): number;
    vertexStride(arg0: number): VkAccelerationStructureGeometryTrianglesDataKHR;
}