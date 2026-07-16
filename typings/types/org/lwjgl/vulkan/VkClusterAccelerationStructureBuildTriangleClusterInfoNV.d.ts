import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkClusterAccelerationStructureGeometryIndexAndGeometryFlagsNV } from '../../../org/lwjgl/vulkan/VkClusterAccelerationStructureGeometryIndexAndGeometryFlagsNV.d.ts'
export class VkClusterAccelerationStructureBuildTriangleClusterInfoNV extends Struct<VkClusterAccelerationStructureBuildTriangleClusterInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BASEGEOMETRYINDEXANDGEOMETRYFLAGS: number;
    static BITFIELD0: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CLUSTERFLAGS: number;
    static CLUSTERID: number;
    static GEOMETRYINDEXANDFLAGSBUFFER: number;
    static GEOMETRYINDEXANDFLAGSBUFFERSTRIDE: number;
    static INDEXBUFFER: number;
    static INDEXBUFFERSTRIDE: number;
    static OPACITYMICROMAPARRAY: number;
    static OPACITYMICROMAPINDEXBUFFER: number;
    static OPACITYMICROMAPINDEXBUFFERSTRIDE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static VERTEXBUFFER: number;
    static VERTEXBUFFERSTRIDE: number;
    static calloc(): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    static calloc(paramarg0: MemoryStack): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    static create(paramarg0: number): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    static malloc(paramarg0: MemoryStack): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbaseGeometryIndexAndGeometryFlags(paramarg0: number): VkClusterAccelerationStructureGeometryIndexAndGeometryFlagsNV;
    static nbaseGeometryIndexAndGeometryFlags(paramarg0: number, paramarg1: VkClusterAccelerationStructureGeometryIndexAndGeometryFlagsNV): void;
    static nbitfield0(paramarg0: number): number;
    static nbitfield0(paramarg0: number, paramarg1: number): void;
    static nclusterFlags(paramarg0: number): number;
    static nclusterFlags(paramarg0: number, paramarg1: number): void;
    static nclusterID(paramarg0: number): number;
    static nclusterID(paramarg0: number, paramarg1: number): void;
    static ngeometryIndexAndFlagsBuffer(paramarg0: number): number;
    static ngeometryIndexAndFlagsBuffer(paramarg0: number, paramarg1: number): void;
    static ngeometryIndexAndFlagsBufferStride(paramarg0: number): number;
    static ngeometryIndexAndFlagsBufferStride(paramarg0: number, paramarg1: number): void;
    static nindexBuffer(paramarg0: number): number;
    static nindexBuffer(paramarg0: number, paramarg1: number): void;
    static nindexBufferStride(paramarg0: number): number;
    static nindexBufferStride(paramarg0: number, paramarg1: number): void;
    static nindexType(paramarg0: number): number;
    static nindexType(paramarg0: number, paramarg1: number): void;
    static nopacityMicromapArray(paramarg0: number): number;
    static nopacityMicromapArray(paramarg0: number, paramarg1: number): void;
    static nopacityMicromapIndexBuffer(paramarg0: number): number;
    static nopacityMicromapIndexBuffer(paramarg0: number, paramarg1: number): void;
    static nopacityMicromapIndexBufferStride(paramarg0: number): number;
    static nopacityMicromapIndexBufferStride(paramarg0: number, paramarg1: number): void;
    static nopacityMicromapIndexType(paramarg0: number): number;
    static nopacityMicromapIndexType(paramarg0: number, paramarg1: number): void;
    static npositionTruncateBitCount(paramarg0: number): number;
    static npositionTruncateBitCount(paramarg0: number, paramarg1: number): void;
    static ntriangleCount(paramarg0: number): number;
    static ntriangleCount(paramarg0: number, paramarg1: number): void;
    static nvertexBuffer(paramarg0: number): number;
    static nvertexBuffer(paramarg0: number, paramarg1: number): void;
    static nvertexBufferStride(paramarg0: number): number;
    static nvertexBufferStride(paramarg0: number, paramarg1: number): void;
    static nvertexCount(paramarg0: number): number;
    static nvertexCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    baseGeometryIndexAndGeometryFlags(): VkClusterAccelerationStructureGeometryIndexAndGeometryFlagsNV;
    baseGeometryIndexAndGeometryFlags(arg0: (param0: VkClusterAccelerationStructureGeometryIndexAndGeometryFlagsNV) => void): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    baseGeometryIndexAndGeometryFlags(arg0: VkClusterAccelerationStructureGeometryIndexAndGeometryFlagsNV): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    close(): void;
    clusterFlags(): number;
    clusterFlags(arg0: number): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    clusterID(): number;
    clusterID(arg0: number): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    create(arg0: number, arg1: ByteBuffer): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    geometryIndexAndFlagsBuffer(): number;
    geometryIndexAndFlagsBuffer(arg0: number): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    geometryIndexAndFlagsBufferStride(): number;
    geometryIndexAndFlagsBufferStride(arg0: number): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    indexBuffer(): number;
    indexBuffer(arg0: number): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    indexBufferStride(): number;
    indexBufferStride(arg0: number): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    indexType(): number;
    indexType(arg0: number): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    opacityMicromapArray(): number;
    opacityMicromapArray(arg0: number): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    opacityMicromapIndexBuffer(): number;
    opacityMicromapIndexBuffer(arg0: number): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    opacityMicromapIndexBufferStride(): number;
    opacityMicromapIndexBufferStride(arg0: number): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    opacityMicromapIndexType(): number;
    opacityMicromapIndexType(arg0: number): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    positionTruncateBitCount(): number;
    positionTruncateBitCount(arg0: number): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: VkClusterAccelerationStructureGeometryIndexAndGeometryFlagsNV, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: number): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    set(arg0: VkClusterAccelerationStructureBuildTriangleClusterInfoNV): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    sizeof(): number;
    triangleCount(): number;
    triangleCount(arg0: number): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    vertexBuffer(): number;
    vertexBuffer(arg0: number): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    vertexBufferStride(): number;
    vertexBufferStride(arg0: number): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
    vertexCount(): number;
    vertexCount(arg0: number): VkClusterAccelerationStructureBuildTriangleClusterInfoNV;
}