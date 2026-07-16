import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkQueueFamilyCheckpointProperties2NV extends Struct<VkQueueFamilyCheckpointProperties2NV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CHECKPOINTEXECUTIONSTAGEMASK: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkQueueFamilyCheckpointProperties2NV;
    static calloc(paramarg0: MemoryStack): VkQueueFamilyCheckpointProperties2NV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkQueueFamilyCheckpointProperties2NV;
    static create(paramarg0: number): VkQueueFamilyCheckpointProperties2NV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkQueueFamilyCheckpointProperties2NV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkQueueFamilyCheckpointProperties2NV;
    static malloc(paramarg0: MemoryStack): VkQueueFamilyCheckpointProperties2NV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncheckpointExecutionStageMask(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    checkpointExecutionStageMask(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkQueueFamilyCheckpointProperties2NV;
    pNext(): number;
    pNext(arg0: number): VkQueueFamilyCheckpointProperties2NV;
    sType(): number;
    sType(arg0: number): VkQueueFamilyCheckpointProperties2NV;
    sType$Default(): VkQueueFamilyCheckpointProperties2NV;
    set(arg0: number, arg1: number): VkQueueFamilyCheckpointProperties2NV;
    set(arg0: VkQueueFamilyCheckpointProperties2NV): VkQueueFamilyCheckpointProperties2NV;
    sizeof(): number;
}