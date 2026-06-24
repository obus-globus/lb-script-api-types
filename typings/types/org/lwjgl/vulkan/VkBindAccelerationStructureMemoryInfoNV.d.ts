import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkBindAccelerationStructureMemoryInfoNV extends Struct<VkBindAccelerationStructureMemoryInfoNV> implements NativeResource {
    static ACCELERATIONSTRUCTURE: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEVICEINDEXCOUNT: number;
    static MEMORY: number;
    static MEMORYOFFSET: number;
    static PDEVICEINDICES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkBindAccelerationStructureMemoryInfoNV;
    static calloc(paramarg0: MemoryStack): VkBindAccelerationStructureMemoryInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkBindAccelerationStructureMemoryInfoNV;
    static create(paramarg0: number): VkBindAccelerationStructureMemoryInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBindAccelerationStructureMemoryInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkBindAccelerationStructureMemoryInfoNV;
    static malloc(paramarg0: MemoryStack): VkBindAccelerationStructureMemoryInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naccelerationStructure(paramarg0: number): number;
    static naccelerationStructure(paramarg0: number, paramarg1: number): void;
    static ndeviceIndexCount(paramarg0: number): number;
    static ndeviceIndexCount(paramarg0: number, paramarg1: number): void;
    static nmemory(paramarg0: number): number;
    static nmemory(paramarg0: number, paramarg1: number): void;
    static nmemoryOffset(paramarg0: number): number;
    static nmemoryOffset(paramarg0: number, paramarg1: number): void;
    static npDeviceIndices(paramarg0: number): IntBuffer;
    static npDeviceIndices(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    accelerationStructure(): number;
    accelerationStructure(arg0: number): VkBindAccelerationStructureMemoryInfoNV;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkBindAccelerationStructureMemoryInfoNV;
    deviceIndexCount(): number;
    memory(): number;
    memory(arg0: number): VkBindAccelerationStructureMemoryInfoNV;
    memoryOffset(): number;
    memoryOffset(arg0: number): VkBindAccelerationStructureMemoryInfoNV;
    pDeviceIndices(): IntBuffer;
    pDeviceIndices(arg0: IntBuffer): VkBindAccelerationStructureMemoryInfoNV;
    pNext(): number;
    pNext(arg0: number): VkBindAccelerationStructureMemoryInfoNV;
    sType(): number;
    sType(arg0: number): VkBindAccelerationStructureMemoryInfoNV;
    sType$Default(): VkBindAccelerationStructureMemoryInfoNV;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: IntBuffer): VkBindAccelerationStructureMemoryInfoNV;
    set(arg0: VkBindAccelerationStructureMemoryInfoNV): VkBindAccelerationStructureMemoryInfoNV;
    sizeof(): number;
}