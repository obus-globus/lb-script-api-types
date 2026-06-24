import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkCudaModuleCreateInfoNV extends Struct<VkCudaModuleCreateInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DATASIZE: number;
    static PDATA: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkCudaModuleCreateInfoNV;
    static calloc(paramarg0: MemoryStack): VkCudaModuleCreateInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCudaModuleCreateInfoNV;
    static create(paramarg0: number): VkCudaModuleCreateInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCudaModuleCreateInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCudaModuleCreateInfoNV;
    static malloc(paramarg0: MemoryStack): VkCudaModuleCreateInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndataSize(paramarg0: number): number;
    static ndataSize(paramarg0: number, paramarg1: number): void;
    static npData(paramarg0: number): ByteBuffer;
    static npData(paramarg0: number, paramarg1: ByteBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkCudaModuleCreateInfoNV;
    dataSize(): number;
    pData(): ByteBuffer;
    pData(arg0: ByteBuffer): VkCudaModuleCreateInfoNV;
    pNext(): number;
    pNext(arg0: number): VkCudaModuleCreateInfoNV;
    sType(): number;
    sType(arg0: number): VkCudaModuleCreateInfoNV;
    sType$Default(): VkCudaModuleCreateInfoNV;
    set(arg0: number, arg1: number, arg2: ByteBuffer): VkCudaModuleCreateInfoNV;
    set(arg0: VkCudaModuleCreateInfoNV): VkCudaModuleCreateInfoNV;
    sizeof(): number;
}