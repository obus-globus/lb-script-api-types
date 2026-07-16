import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkRayTracingPipelineClusterAccelerationStructureCreateInfoNV extends Struct<VkRayTracingPipelineClusterAccelerationStructureCreateInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static ALLOWCLUSTERACCELERATIONSTRUCTURE: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkRayTracingPipelineClusterAccelerationStructureCreateInfoNV;
    static calloc(paramarg0: MemoryStack): VkRayTracingPipelineClusterAccelerationStructureCreateInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkRayTracingPipelineClusterAccelerationStructureCreateInfoNV;
    static create(paramarg0: number): VkRayTracingPipelineClusterAccelerationStructureCreateInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRayTracingPipelineClusterAccelerationStructureCreateInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkRayTracingPipelineClusterAccelerationStructureCreateInfoNV;
    static malloc(paramarg0: MemoryStack): VkRayTracingPipelineClusterAccelerationStructureCreateInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nallowClusterAccelerationStructure(paramarg0: number): number;
    static nallowClusterAccelerationStructure(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    allowClusterAccelerationStructure(): boolean;
    allowClusterAccelerationStructure(arg0: boolean): VkRayTracingPipelineClusterAccelerationStructureCreateInfoNV;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkRayTracingPipelineClusterAccelerationStructureCreateInfoNV;
    pNext(): number;
    pNext(arg0: number): VkRayTracingPipelineClusterAccelerationStructureCreateInfoNV;
    sType(): number;
    sType(arg0: number): VkRayTracingPipelineClusterAccelerationStructureCreateInfoNV;
    sType$Default(): VkRayTracingPipelineClusterAccelerationStructureCreateInfoNV;
    set(arg0: number, arg1: number, arg2: boolean): VkRayTracingPipelineClusterAccelerationStructureCreateInfoNV;
    set(arg0: VkRayTracingPipelineClusterAccelerationStructureCreateInfoNV): VkRayTracingPipelineClusterAccelerationStructureCreateInfoNV;
    sizeof(): number;
}