import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkStridedDeviceAddressNV } from '../../../org/lwjgl/vulkan/VkStridedDeviceAddressNV.d.ts'
export class VkClusterAccelerationStructureInstantiateClusterInfoNV extends Struct<VkClusterAccelerationStructureInstantiateClusterInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITFIELD0: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CLUSTERIDOFFSET: number;
    static CLUSTERTEMPLATEADDRESS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static VERTEXBUFFER: number;
    static calloc(): VkClusterAccelerationStructureInstantiateClusterInfoNV;
    static calloc(paramarg0: MemoryStack): VkClusterAccelerationStructureInstantiateClusterInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkClusterAccelerationStructureInstantiateClusterInfoNV;
    static create(paramarg0: number): VkClusterAccelerationStructureInstantiateClusterInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkClusterAccelerationStructureInstantiateClusterInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkClusterAccelerationStructureInstantiateClusterInfoNV;
    static malloc(paramarg0: MemoryStack): VkClusterAccelerationStructureInstantiateClusterInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbitfield0(paramarg0: number): number;
    static nbitfield0(paramarg0: number, paramarg1: number): void;
    static nclusterIdOffset(paramarg0: number): number;
    static nclusterIdOffset(paramarg0: number, paramarg1: number): void;
    static nclusterTemplateAddress(paramarg0: number): number;
    static nclusterTemplateAddress(paramarg0: number, paramarg1: number): void;
    static ngeometryIndexOffset(paramarg0: number): number;
    static ngeometryIndexOffset(paramarg0: number, paramarg1: number): void;
    static nreserved(paramarg0: number): number;
    static nreserved(paramarg0: number, paramarg1: number): void;
    static nvertexBuffer(paramarg0: number): VkStridedDeviceAddressNV;
    static nvertexBuffer(paramarg0: number, paramarg1: VkStridedDeviceAddressNV): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    clusterIdOffset(): number;
    clusterIdOffset(arg0: number): VkClusterAccelerationStructureInstantiateClusterInfoNV;
    clusterTemplateAddress(): number;
    clusterTemplateAddress(arg0: number): VkClusterAccelerationStructureInstantiateClusterInfoNV;
    create(arg0: number, arg1: ByteBuffer): VkClusterAccelerationStructureInstantiateClusterInfoNV;
    geometryIndexOffset(): number;
    geometryIndexOffset(arg0: number): VkClusterAccelerationStructureInstantiateClusterInfoNV;
    reserved(): number;
    reserved(arg0: number): VkClusterAccelerationStructureInstantiateClusterInfoNV;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: VkStridedDeviceAddressNV): VkClusterAccelerationStructureInstantiateClusterInfoNV;
    set(arg0: VkClusterAccelerationStructureInstantiateClusterInfoNV): VkClusterAccelerationStructureInstantiateClusterInfoNV;
    sizeof(): number;
    vertexBuffer(): VkStridedDeviceAddressNV;
    vertexBuffer(arg0: (param0: VkStridedDeviceAddressNV) => void): VkClusterAccelerationStructureInstantiateClusterInfoNV;
    vertexBuffer(arg0: VkStridedDeviceAddressNV): VkClusterAccelerationStructureInstantiateClusterInfoNV;
}