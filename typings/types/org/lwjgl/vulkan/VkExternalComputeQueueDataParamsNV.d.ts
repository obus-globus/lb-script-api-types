import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkExternalComputeQueueDataParamsNV extends Struct<VkExternalComputeQueueDataParamsNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEVICEINDEX: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkExternalComputeQueueDataParamsNV;
    static calloc(paramarg0: MemoryStack): VkExternalComputeQueueDataParamsNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkExternalComputeQueueDataParamsNV;
    static create(paramarg0: number): VkExternalComputeQueueDataParamsNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkExternalComputeQueueDataParamsNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkExternalComputeQueueDataParamsNV;
    static malloc(paramarg0: MemoryStack): VkExternalComputeQueueDataParamsNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndeviceIndex(paramarg0: number): number;
    static ndeviceIndex(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkExternalComputeQueueDataParamsNV;
    deviceIndex(): number;
    deviceIndex(arg0: number): VkExternalComputeQueueDataParamsNV;
    pNext(): number;
    pNext(arg0: number): VkExternalComputeQueueDataParamsNV;
    sType(): number;
    sType(arg0: number): VkExternalComputeQueueDataParamsNV;
    sType$Default(): VkExternalComputeQueueDataParamsNV;
    set(arg0: number, arg1: number, arg2: number): VkExternalComputeQueueDataParamsNV;
    set(arg0: VkExternalComputeQueueDataParamsNV): VkExternalComputeQueueDataParamsNV;
    sizeof(): number;
}