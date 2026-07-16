import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkQueue } from '../../../org/lwjgl/vulkan/VkQueue.d.ts'
export class VkExternalComputeQueueCreateInfoNV extends Struct<VkExternalComputeQueueCreateInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PREFERREDQUEUE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkExternalComputeQueueCreateInfoNV;
    static calloc(paramarg0: MemoryStack): VkExternalComputeQueueCreateInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkExternalComputeQueueCreateInfoNV;
    static create(paramarg0: number): VkExternalComputeQueueCreateInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkExternalComputeQueueCreateInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkExternalComputeQueueCreateInfoNV;
    static malloc(paramarg0: MemoryStack): VkExternalComputeQueueCreateInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npreferredQueue(paramarg0: number): number;
    static npreferredQueue(paramarg0: number, paramarg1: VkQueue): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkExternalComputeQueueCreateInfoNV;
    pNext(): number;
    pNext(arg0: number): VkExternalComputeQueueCreateInfoNV;
    preferredQueue(): number;
    preferredQueue(arg0: VkQueue): VkExternalComputeQueueCreateInfoNV;
    sType(): number;
    sType(arg0: number): VkExternalComputeQueueCreateInfoNV;
    sType$Default(): VkExternalComputeQueueCreateInfoNV;
    set(arg0: number, arg1: number, arg2: VkQueue): VkExternalComputeQueueCreateInfoNV;
    set(arg0: VkExternalComputeQueueCreateInfoNV): VkExternalComputeQueueCreateInfoNV;
    sizeof(): number;
}