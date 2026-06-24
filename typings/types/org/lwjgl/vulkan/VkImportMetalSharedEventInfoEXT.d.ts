import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkImportMetalSharedEventInfoEXT extends Struct<VkImportMetalSharedEventInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MTLSHAREDEVENT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkImportMetalSharedEventInfoEXT;
    static calloc(paramarg0: MemoryStack): VkImportMetalSharedEventInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImportMetalSharedEventInfoEXT;
    static create(paramarg0: number): VkImportMetalSharedEventInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImportMetalSharedEventInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImportMetalSharedEventInfoEXT;
    static malloc(paramarg0: MemoryStack): VkImportMetalSharedEventInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmtlSharedEvent(paramarg0: number): number;
    static nmtlSharedEvent(paramarg0: number, paramarg1: number): void;
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
    create(arg0: number, arg1: ByteBuffer): VkImportMetalSharedEventInfoEXT;
    mtlSharedEvent(): number;
    mtlSharedEvent(arg0: number): VkImportMetalSharedEventInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkImportMetalSharedEventInfoEXT;
    sType(): number;
    sType(arg0: number): VkImportMetalSharedEventInfoEXT;
    sType$Default(): VkImportMetalSharedEventInfoEXT;
    set(arg0: number, arg1: number, arg2: number): VkImportMetalSharedEventInfoEXT;
    set(arg0: VkImportMetalSharedEventInfoEXT): VkImportMetalSharedEventInfoEXT;
    sizeof(): number;
}