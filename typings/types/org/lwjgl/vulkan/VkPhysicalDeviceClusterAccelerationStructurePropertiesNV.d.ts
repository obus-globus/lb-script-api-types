import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceClusterAccelerationStructurePropertiesNV extends Struct<VkPhysicalDeviceClusterAccelerationStructurePropertiesNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CLUSTERBOTTOMLEVELBYTEALIGNMENT: number;
    static CLUSTERBYTEALIGNMENT: number;
    static CLUSTERSCRATCHBYTEALIGNMENT: number;
    static CLUSTERTEMPLATEBOUNDSBYTEALIGNMENT: number;
    static CLUSTERTEMPLATEBYTEALIGNMENT: number;
    static MAXCLUSTERGEOMETRYINDEX: number;
    static MAXTRIANGLESPERCLUSTER: number;
    static MAXVERTICESPERCLUSTER: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceClusterAccelerationStructurePropertiesNV;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceClusterAccelerationStructurePropertiesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceClusterAccelerationStructurePropertiesNV;
    static create(paramarg0: number): VkPhysicalDeviceClusterAccelerationStructurePropertiesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceClusterAccelerationStructurePropertiesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceClusterAccelerationStructurePropertiesNV;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceClusterAccelerationStructurePropertiesNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nclusterBottomLevelByteAlignment(paramarg0: number): number;
    static nclusterByteAlignment(paramarg0: number): number;
    static nclusterScratchByteAlignment(paramarg0: number): number;
    static nclusterTemplateBoundsByteAlignment(paramarg0: number): number;
    static nclusterTemplateByteAlignment(paramarg0: number): number;
    static nmaxClusterGeometryIndex(paramarg0: number): number;
    static nmaxTrianglesPerCluster(paramarg0: number): number;
    static nmaxVerticesPerCluster(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    clusterBottomLevelByteAlignment(): number;
    clusterByteAlignment(): number;
    clusterScratchByteAlignment(): number;
    clusterTemplateBoundsByteAlignment(): number;
    clusterTemplateByteAlignment(): number;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceClusterAccelerationStructurePropertiesNV;
    maxClusterGeometryIndex(): number;
    maxTrianglesPerCluster(): number;
    maxVerticesPerCluster(): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceClusterAccelerationStructurePropertiesNV;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceClusterAccelerationStructurePropertiesNV;
    sType$Default(): VkPhysicalDeviceClusterAccelerationStructurePropertiesNV;
    set(arg0: number, arg1: number): VkPhysicalDeviceClusterAccelerationStructurePropertiesNV;
    set(arg0: VkPhysicalDeviceClusterAccelerationStructurePropertiesNV): VkPhysicalDeviceClusterAccelerationStructurePropertiesNV;
    sizeof(): number;
}