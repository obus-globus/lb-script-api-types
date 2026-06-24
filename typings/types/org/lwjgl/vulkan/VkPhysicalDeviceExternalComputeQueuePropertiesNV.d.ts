import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceExternalComputeQueuePropertiesNV extends Struct<VkPhysicalDeviceExternalComputeQueuePropertiesNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static EXTERNALDATASIZE: number;
    static MAXEXTERNALQUEUES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceExternalComputeQueuePropertiesNV;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceExternalComputeQueuePropertiesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceExternalComputeQueuePropertiesNV;
    static create(paramarg0: number): VkPhysicalDeviceExternalComputeQueuePropertiesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceExternalComputeQueuePropertiesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceExternalComputeQueuePropertiesNV;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceExternalComputeQueuePropertiesNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nexternalDataSize(paramarg0: number): number;
    static nmaxExternalQueues(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceExternalComputeQueuePropertiesNV;
    externalDataSize(): number;
    maxExternalQueues(): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceExternalComputeQueuePropertiesNV;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceExternalComputeQueuePropertiesNV;
    sType$Default(): VkPhysicalDeviceExternalComputeQueuePropertiesNV;
    set(arg0: number, arg1: number): VkPhysicalDeviceExternalComputeQueuePropertiesNV;
    set(arg0: VkPhysicalDeviceExternalComputeQueuePropertiesNV): VkPhysicalDeviceExternalComputeQueuePropertiesNV;
    sizeof(): number;
}