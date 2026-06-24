import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkClusterAccelerationStructureTriangleClusterInputNV extends Struct<VkClusterAccelerationStructureTriangleClusterInputNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXCLUSTERTRIANGLECOUNT: number;
    static MAXCLUSTERUNIQUEGEOMETRYCOUNT: number;
    static MAXCLUSTERVERTEXCOUNT: number;
    static MAXGEOMETRYINDEXVALUE: number;
    static MAXTOTALTRIANGLECOUNT: number;
    static MAXTOTALVERTEXCOUNT: number;
    static MINPOSITIONTRUNCATEBITCOUNT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static VERTEXFORMAT: number;
    static calloc(): VkClusterAccelerationStructureTriangleClusterInputNV;
    static calloc(paramarg0: MemoryStack): VkClusterAccelerationStructureTriangleClusterInputNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkClusterAccelerationStructureTriangleClusterInputNV;
    static create(paramarg0: number): VkClusterAccelerationStructureTriangleClusterInputNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkClusterAccelerationStructureTriangleClusterInputNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkClusterAccelerationStructureTriangleClusterInputNV;
    static malloc(paramarg0: MemoryStack): VkClusterAccelerationStructureTriangleClusterInputNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxClusterTriangleCount(paramarg0: number): number;
    static nmaxClusterTriangleCount(paramarg0: number, paramarg1: number): void;
    static nmaxClusterUniqueGeometryCount(paramarg0: number): number;
    static nmaxClusterUniqueGeometryCount(paramarg0: number, paramarg1: number): void;
    static nmaxClusterVertexCount(paramarg0: number): number;
    static nmaxClusterVertexCount(paramarg0: number, paramarg1: number): void;
    static nmaxGeometryIndexValue(paramarg0: number): number;
    static nmaxGeometryIndexValue(paramarg0: number, paramarg1: number): void;
    static nmaxTotalTriangleCount(paramarg0: number): number;
    static nmaxTotalTriangleCount(paramarg0: number, paramarg1: number): void;
    static nmaxTotalVertexCount(paramarg0: number): number;
    static nmaxTotalVertexCount(paramarg0: number, paramarg1: number): void;
    static nminPositionTruncateBitCount(paramarg0: number): number;
    static nminPositionTruncateBitCount(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nvertexFormat(paramarg0: number): number;
    static nvertexFormat(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkClusterAccelerationStructureTriangleClusterInputNV;
    maxClusterTriangleCount(): number;
    maxClusterTriangleCount(arg0: number): VkClusterAccelerationStructureTriangleClusterInputNV;
    maxClusterUniqueGeometryCount(): number;
    maxClusterUniqueGeometryCount(arg0: number): VkClusterAccelerationStructureTriangleClusterInputNV;
    maxClusterVertexCount(): number;
    maxClusterVertexCount(arg0: number): VkClusterAccelerationStructureTriangleClusterInputNV;
    maxGeometryIndexValue(): number;
    maxGeometryIndexValue(arg0: number): VkClusterAccelerationStructureTriangleClusterInputNV;
    maxTotalTriangleCount(): number;
    maxTotalTriangleCount(arg0: number): VkClusterAccelerationStructureTriangleClusterInputNV;
    maxTotalVertexCount(): number;
    maxTotalVertexCount(arg0: number): VkClusterAccelerationStructureTriangleClusterInputNV;
    minPositionTruncateBitCount(): number;
    minPositionTruncateBitCount(arg0: number): VkClusterAccelerationStructureTriangleClusterInputNV;
    pNext(): number;
    pNext(arg0: number): VkClusterAccelerationStructureTriangleClusterInputNV;
    sType(): number;
    sType(arg0: number): VkClusterAccelerationStructureTriangleClusterInputNV;
    sType$Default(): VkClusterAccelerationStructureTriangleClusterInputNV;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): VkClusterAccelerationStructureTriangleClusterInputNV;
    set(arg0: VkClusterAccelerationStructureTriangleClusterInputNV): VkClusterAccelerationStructureTriangleClusterInputNV;
    sizeof(): number;
    vertexFormat(): number;
    vertexFormat(arg0: number): VkClusterAccelerationStructureTriangleClusterInputNV;
}