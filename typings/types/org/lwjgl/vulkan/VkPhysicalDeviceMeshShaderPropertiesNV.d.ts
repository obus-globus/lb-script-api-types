import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceMeshShaderPropertiesNV extends Struct<VkPhysicalDeviceMeshShaderPropertiesNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXDRAWMESHTASKSCOUNT: number;
    static MAXMESHMULTIVIEWVIEWCOUNT: number;
    static MAXMESHOUTPUTPRIMITIVES: number;
    static MAXMESHOUTPUTVERTICES: number;
    static MAXMESHTOTALMEMORYSIZE: number;
    static MAXMESHWORKGROUPINVOCATIONS: number;
    static MAXMESHWORKGROUPSIZE: number;
    static MAXTASKOUTPUTCOUNT: number;
    static MAXTASKTOTALMEMORYSIZE: number;
    static MAXTASKWORKGROUPINVOCATIONS: number;
    static MAXTASKWORKGROUPSIZE: number;
    static MESHOUTPUTPERPRIMITIVEGRANULARITY: number;
    static MESHOUTPUTPERVERTEXGRANULARITY: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceMeshShaderPropertiesNV;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMeshShaderPropertiesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceMeshShaderPropertiesNV;
    static create(paramarg0: number): VkPhysicalDeviceMeshShaderPropertiesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceMeshShaderPropertiesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceMeshShaderPropertiesNV;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMeshShaderPropertiesNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxDrawMeshTasksCount(paramarg0: number): number;
    static nmaxMeshMultiviewViewCount(paramarg0: number): number;
    static nmaxMeshOutputPrimitives(paramarg0: number): number;
    static nmaxMeshOutputVertices(paramarg0: number): number;
    static nmaxMeshTotalMemorySize(paramarg0: number): number;
    static nmaxMeshWorkGroupInvocations(paramarg0: number): number;
    static nmaxMeshWorkGroupSize(paramarg0: number, paramarg1: number): number;
    static nmaxMeshWorkGroupSize(paramarg0: number): IntBuffer;
    static nmaxTaskOutputCount(paramarg0: number): number;
    static nmaxTaskTotalMemorySize(paramarg0: number): number;
    static nmaxTaskWorkGroupInvocations(paramarg0: number): number;
    static nmaxTaskWorkGroupSize(paramarg0: number, paramarg1: number): number;
    static nmaxTaskWorkGroupSize(paramarg0: number): IntBuffer;
    static nmeshOutputPerPrimitiveGranularity(paramarg0: number): number;
    static nmeshOutputPerVertexGranularity(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceMeshShaderPropertiesNV;
    maxDrawMeshTasksCount(): number;
    maxMeshMultiviewViewCount(): number;
    maxMeshOutputPrimitives(): number;
    maxMeshOutputVertices(): number;
    maxMeshTotalMemorySize(): number;
    maxMeshWorkGroupInvocations(): number;
    maxMeshWorkGroupSize(): IntBuffer;
    maxMeshWorkGroupSize(arg0: number): number;
    maxTaskOutputCount(): number;
    maxTaskTotalMemorySize(): number;
    maxTaskWorkGroupInvocations(): number;
    maxTaskWorkGroupSize(): IntBuffer;
    maxTaskWorkGroupSize(arg0: number): number;
    meshOutputPerPrimitiveGranularity(): number;
    meshOutputPerVertexGranularity(): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceMeshShaderPropertiesNV;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceMeshShaderPropertiesNV;
    sType$Default(): VkPhysicalDeviceMeshShaderPropertiesNV;
    set(arg0: number, arg1: number): VkPhysicalDeviceMeshShaderPropertiesNV;
    set(arg0: VkPhysicalDeviceMeshShaderPropertiesNV): VkPhysicalDeviceMeshShaderPropertiesNV;
    sizeof(): number;
}