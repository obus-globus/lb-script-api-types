import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent3D } from '../../../org/lwjgl/vulkan/VkExtent3D.d.ts'
export class VkQueueFamilyProperties extends Struct<VkQueueFamilyProperties> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MINIMAGETRANSFERGRANULARITY: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static QUEUECOUNT: number;
    static QUEUEFLAGS: number;
    static SIZEOF: number;
    static TIMESTAMPVALIDBITS: number;
    static calloc(): VkQueueFamilyProperties;
    static calloc(paramarg0: MemoryStack): VkQueueFamilyProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkQueueFamilyProperties;
    static create(paramarg0: number): VkQueueFamilyProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkQueueFamilyProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkQueueFamilyProperties;
    static malloc(paramarg0: MemoryStack): VkQueueFamilyProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nminImageTransferGranularity(paramarg0: number): VkExtent3D;
    static nqueueCount(paramarg0: number): number;
    static nqueueFlags(paramarg0: number): number;
    static ntimestampValidBits(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkQueueFamilyProperties;
    minImageTransferGranularity(): VkExtent3D;
    queueCount(): number;
    queueFlags(): number;
    sizeof(): number;
    timestampValidBits(): number;
}