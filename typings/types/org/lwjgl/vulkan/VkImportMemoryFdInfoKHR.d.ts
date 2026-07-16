import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkImportMemoryFdInfoKHR extends Struct<VkImportMemoryFdInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FD: number;
    static HANDLETYPE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkImportMemoryFdInfoKHR;
    static calloc(paramarg0: MemoryStack): VkImportMemoryFdInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImportMemoryFdInfoKHR;
    static create(paramarg0: number): VkImportMemoryFdInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImportMemoryFdInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImportMemoryFdInfoKHR;
    static malloc(paramarg0: MemoryStack): VkImportMemoryFdInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfd(paramarg0: number): number;
    static nfd(paramarg0: number, paramarg1: number): void;
    static nhandleType(paramarg0: number): number;
    static nhandleType(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkImportMemoryFdInfoKHR;
    fd(): number;
    fd(arg0: number): VkImportMemoryFdInfoKHR;
    handleType(): number;
    handleType(arg0: number): VkImportMemoryFdInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkImportMemoryFdInfoKHR;
    sType(): number;
    sType(arg0: number): VkImportMemoryFdInfoKHR;
    sType$Default(): VkImportMemoryFdInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkImportMemoryFdInfoKHR;
    set(arg0: VkImportMemoryFdInfoKHR): VkImportMemoryFdInfoKHR;
    sizeof(): number;
}