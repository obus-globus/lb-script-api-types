import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceOrHostAddressConstKHR } from '../../../org/lwjgl/vulkan/VkDeviceOrHostAddressConstKHR.d.ts'
export class VkAccelerationStructureGeometrySpheresDataNV extends Struct<VkAccelerationStructureGeometrySpheresDataNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static INDEXDATA: number;
    static INDEXSTRIDE: number;
    static INDEXTYPE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RADIUSDATA: number;
    static RADIUSFORMAT: number;
    static RADIUSSTRIDE: number;
    static SIZEOF: number;
    static STYPE: number;
    static VERTEXDATA: number;
    static VERTEXFORMAT: number;
    static VERTEXSTRIDE: number;
    static calloc(): VkAccelerationStructureGeometrySpheresDataNV;
    static calloc(paramarg0: MemoryStack): VkAccelerationStructureGeometrySpheresDataNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAccelerationStructureGeometrySpheresDataNV;
    static create(paramarg0: number): VkAccelerationStructureGeometrySpheresDataNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAccelerationStructureGeometrySpheresDataNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAccelerationStructureGeometrySpheresDataNV;
    static malloc(paramarg0: MemoryStack): VkAccelerationStructureGeometrySpheresDataNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nindexData(paramarg0: number): VkDeviceOrHostAddressConstKHR;
    static nindexData(paramarg0: number, paramarg1: VkDeviceOrHostAddressConstKHR): void;
    static nindexStride(paramarg0: number): number;
    static nindexStride(paramarg0: number, paramarg1: number): void;
    static nindexType(paramarg0: number): number;
    static nindexType(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nradiusData(paramarg0: number): VkDeviceOrHostAddressConstKHR;
    static nradiusData(paramarg0: number, paramarg1: VkDeviceOrHostAddressConstKHR): void;
    static nradiusFormat(paramarg0: number): number;
    static nradiusFormat(paramarg0: number, paramarg1: number): void;
    static nradiusStride(paramarg0: number): number;
    static nradiusStride(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
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
    create(arg0: number, arg1: ByteBuffer): VkAccelerationStructureGeometrySpheresDataNV;
    indexData(): VkDeviceOrHostAddressConstKHR;
    indexData(arg0: (param0: VkDeviceOrHostAddressConstKHR) => void): VkAccelerationStructureGeometrySpheresDataNV;
    indexData(arg0: VkDeviceOrHostAddressConstKHR): VkAccelerationStructureGeometrySpheresDataNV;
    indexStride(): number;
    indexStride(arg0: number): VkAccelerationStructureGeometrySpheresDataNV;
    indexType(): number;
    indexType(arg0: number): VkAccelerationStructureGeometrySpheresDataNV;
    pNext(): number;
    pNext(arg0: number): VkAccelerationStructureGeometrySpheresDataNV;
    radiusData(): VkDeviceOrHostAddressConstKHR;
    radiusData(arg0: (param0: VkDeviceOrHostAddressConstKHR) => void): VkAccelerationStructureGeometrySpheresDataNV;
    radiusData(arg0: VkDeviceOrHostAddressConstKHR): VkAccelerationStructureGeometrySpheresDataNV;
    radiusFormat(): number;
    radiusFormat(arg0: number): VkAccelerationStructureGeometrySpheresDataNV;
    radiusStride(): number;
    radiusStride(arg0: number): VkAccelerationStructureGeometrySpheresDataNV;
    sType(): number;
    sType(arg0: number): VkAccelerationStructureGeometrySpheresDataNV;
    sType$Default(): VkAccelerationStructureGeometrySpheresDataNV;
    set(arg0: number, arg1: number, arg2: number, arg3: VkDeviceOrHostAddressConstKHR, arg4: number, arg5: number, arg6: VkDeviceOrHostAddressConstKHR, arg7: number, arg8: number, arg9: VkDeviceOrHostAddressConstKHR, arg10: number): VkAccelerationStructureGeometrySpheresDataNV;
    set(arg0: VkAccelerationStructureGeometrySpheresDataNV): VkAccelerationStructureGeometrySpheresDataNV;
    sizeof(): number;
    vertexData(): VkDeviceOrHostAddressConstKHR;
    vertexData(arg0: (param0: VkDeviceOrHostAddressConstKHR) => void): VkAccelerationStructureGeometrySpheresDataNV;
    vertexData(arg0: VkDeviceOrHostAddressConstKHR): VkAccelerationStructureGeometrySpheresDataNV;
    vertexFormat(): number;
    vertexFormat(arg0: number): VkAccelerationStructureGeometrySpheresDataNV;
    vertexStride(): number;
    vertexStride(arg0: number): VkAccelerationStructureGeometrySpheresDataNV;
}