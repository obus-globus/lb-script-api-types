import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkClusterAccelerationStructureClustersBottomLevelInputNV } from '../../../org/lwjgl/vulkan/VkClusterAccelerationStructureClustersBottomLevelInputNV.d.ts'
import type { VkClusterAccelerationStructureMoveObjectsInputNV } from '../../../org/lwjgl/vulkan/VkClusterAccelerationStructureMoveObjectsInputNV.d.ts'
import type { VkClusterAccelerationStructureTriangleClusterInputNV } from '../../../org/lwjgl/vulkan/VkClusterAccelerationStructureTriangleClusterInputNV.d.ts'
export class VkClusterAccelerationStructureOpInputNV extends Struct<VkClusterAccelerationStructureOpInputNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PCLUSTERSBOTTOMLEVEL: number;
    static PMOVEOBJECTS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PTRIANGLECLUSTERS: number;
    static SIZEOF: number;
    static calloc(): VkClusterAccelerationStructureOpInputNV;
    static calloc(paramarg0: MemoryStack): VkClusterAccelerationStructureOpInputNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkClusterAccelerationStructureOpInputNV;
    static create(paramarg0: number): VkClusterAccelerationStructureOpInputNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkClusterAccelerationStructureOpInputNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkClusterAccelerationStructureOpInputNV;
    static malloc(paramarg0: MemoryStack): VkClusterAccelerationStructureOpInputNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npClustersBottomLevel(paramarg0: number): VkClusterAccelerationStructureClustersBottomLevelInputNV;
    static npClustersBottomLevel(paramarg0: number, paramarg1: VkClusterAccelerationStructureClustersBottomLevelInputNV): void;
    static npMoveObjects(paramarg0: number): VkClusterAccelerationStructureMoveObjectsInputNV;
    static npMoveObjects(paramarg0: number, paramarg1: VkClusterAccelerationStructureMoveObjectsInputNV): void;
    static npTriangleClusters(paramarg0: number): VkClusterAccelerationStructureTriangleClusterInputNV;
    static npTriangleClusters(paramarg0: number, paramarg1: VkClusterAccelerationStructureTriangleClusterInputNV): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkClusterAccelerationStructureOpInputNV;
    pClustersBottomLevel(): VkClusterAccelerationStructureClustersBottomLevelInputNV;
    pClustersBottomLevel(arg0: VkClusterAccelerationStructureClustersBottomLevelInputNV): VkClusterAccelerationStructureOpInputNV;
    pMoveObjects(): VkClusterAccelerationStructureMoveObjectsInputNV;
    pMoveObjects(arg0: VkClusterAccelerationStructureMoveObjectsInputNV): VkClusterAccelerationStructureOpInputNV;
    pTriangleClusters(): VkClusterAccelerationStructureTriangleClusterInputNV;
    pTriangleClusters(arg0: VkClusterAccelerationStructureTriangleClusterInputNV): VkClusterAccelerationStructureOpInputNV;
    set(arg0: VkClusterAccelerationStructureOpInputNV): VkClusterAccelerationStructureOpInputNV;
    sizeof(): number;
}