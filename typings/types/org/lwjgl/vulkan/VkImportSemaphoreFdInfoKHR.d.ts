import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkImportSemaphoreFdInfoKHR extends Struct<VkImportSemaphoreFdInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FD: number;
    static FLAGS: number;
    static HANDLETYPE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SEMAPHORE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkImportSemaphoreFdInfoKHR;
    static calloc(paramarg0: MemoryStack): VkImportSemaphoreFdInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImportSemaphoreFdInfoKHR;
    static create(paramarg0: number): VkImportSemaphoreFdInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImportSemaphoreFdInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImportSemaphoreFdInfoKHR;
    static malloc(paramarg0: MemoryStack): VkImportSemaphoreFdInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfd(paramarg0: number): number;
    static nfd(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nhandleType(paramarg0: number): number;
    static nhandleType(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsemaphore(paramarg0: number): number;
    static nsemaphore(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkImportSemaphoreFdInfoKHR;
    fd(): number;
    fd(arg0: number): VkImportSemaphoreFdInfoKHR;
    flags(): number;
    flags(arg0: number): VkImportSemaphoreFdInfoKHR;
    handleType(): number;
    handleType(arg0: number): VkImportSemaphoreFdInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkImportSemaphoreFdInfoKHR;
    sType(): number;
    sType(arg0: number): VkImportSemaphoreFdInfoKHR;
    sType$Default(): VkImportSemaphoreFdInfoKHR;
    semaphore(): number;
    semaphore(arg0: number): VkImportSemaphoreFdInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): VkImportSemaphoreFdInfoKHR;
    set(arg0: VkImportSemaphoreFdInfoKHR): VkImportSemaphoreFdInfoKHR;
    sizeof(): number;
}