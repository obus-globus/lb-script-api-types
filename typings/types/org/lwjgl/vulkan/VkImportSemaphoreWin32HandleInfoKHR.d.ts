import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkImportSemaphoreWin32HandleInfoKHR extends Struct<VkImportSemaphoreWin32HandleInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static HANDLE: number;
    static HANDLETYPE: number;
    static NAME: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SEMAPHORE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkImportSemaphoreWin32HandleInfoKHR;
    static calloc(paramarg0: MemoryStack): VkImportSemaphoreWin32HandleInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImportSemaphoreWin32HandleInfoKHR;
    static create(paramarg0: number): VkImportSemaphoreWin32HandleInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImportSemaphoreWin32HandleInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImportSemaphoreWin32HandleInfoKHR;
    static malloc(paramarg0: MemoryStack): VkImportSemaphoreWin32HandleInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nhandle(paramarg0: number): number;
    static nhandle(paramarg0: number, paramarg1: number): void;
    static nhandleType(paramarg0: number): number;
    static nhandleType(paramarg0: number, paramarg1: number): void;
    static nname(paramarg0: number): ByteBuffer;
    static nname(paramarg0: number, paramarg1: ByteBuffer): void;
    static nnameString(paramarg0: number): string;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsemaphore(paramarg0: number): number;
    static nsemaphore(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkImportSemaphoreWin32HandleInfoKHR;
    flags(): number;
    flags(arg0: number): VkImportSemaphoreWin32HandleInfoKHR;
    handle(): number;
    handle(arg0: number): VkImportSemaphoreWin32HandleInfoKHR;
    handleType(): number;
    handleType(arg0: number): VkImportSemaphoreWin32HandleInfoKHR;
    name(): ByteBuffer;
    name(arg0: ByteBuffer): VkImportSemaphoreWin32HandleInfoKHR;
    nameString(): string;
    pNext(): number;
    pNext(arg0: number): VkImportSemaphoreWin32HandleInfoKHR;
    sType(): number;
    sType(arg0: number): VkImportSemaphoreWin32HandleInfoKHR;
    sType$Default(): VkImportSemaphoreWin32HandleInfoKHR;
    semaphore(): number;
    semaphore(arg0: number): VkImportSemaphoreWin32HandleInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: ByteBuffer): VkImportSemaphoreWin32HandleInfoKHR;
    set(arg0: VkImportSemaphoreWin32HandleInfoKHR): VkImportSemaphoreWin32HandleInfoKHR;
    sizeof(): number;
}