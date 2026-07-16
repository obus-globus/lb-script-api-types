import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkImportMemoryMetalHandleInfoEXT extends Struct<VkImportMemoryMetalHandleInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static HANDLE: number;
    static HANDLETYPE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkImportMemoryMetalHandleInfoEXT;
    static calloc(paramarg0: MemoryStack): VkImportMemoryMetalHandleInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImportMemoryMetalHandleInfoEXT;
    static create(paramarg0: number): VkImportMemoryMetalHandleInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImportMemoryMetalHandleInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImportMemoryMetalHandleInfoEXT;
    static malloc(paramarg0: MemoryStack): VkImportMemoryMetalHandleInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nhandle(paramarg0: number): number;
    static nhandle(paramarg0: number, paramarg1: number): void;
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
    create(arg0: number, arg1: ByteBuffer): VkImportMemoryMetalHandleInfoEXT;
    handle(): number;
    handle(arg0: number): VkImportMemoryMetalHandleInfoEXT;
    handleType(): number;
    handleType(arg0: number): VkImportMemoryMetalHandleInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkImportMemoryMetalHandleInfoEXT;
    sType(): number;
    sType(arg0: number): VkImportMemoryMetalHandleInfoEXT;
    sType$Default(): VkImportMemoryMetalHandleInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkImportMemoryMetalHandleInfoEXT;
    set(arg0: VkImportMemoryMetalHandleInfoEXT): VkImportMemoryMetalHandleInfoEXT;
    sizeof(): number;
}