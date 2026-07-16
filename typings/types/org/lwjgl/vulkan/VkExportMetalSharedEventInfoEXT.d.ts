import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkExportMetalSharedEventInfoEXT extends Struct<VkExportMetalSharedEventInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static EVENT: number;
    static MTLSHAREDEVENT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SEMAPHORE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkExportMetalSharedEventInfoEXT;
    static calloc(paramarg0: MemoryStack): VkExportMetalSharedEventInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkExportMetalSharedEventInfoEXT;
    static create(paramarg0: number): VkExportMetalSharedEventInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkExportMetalSharedEventInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkExportMetalSharedEventInfoEXT;
    static malloc(paramarg0: MemoryStack): VkExportMetalSharedEventInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nevent(paramarg0: number): number;
    static nevent(paramarg0: number, paramarg1: number): void;
    static nmtlSharedEvent(paramarg0: number): number;
    static nmtlSharedEvent(paramarg0: number, paramarg1: number): void;
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
    create(arg0: number, arg1: ByteBuffer): VkExportMetalSharedEventInfoEXT;
    event(): number;
    event(arg0: number): VkExportMetalSharedEventInfoEXT;
    mtlSharedEvent(): number;
    mtlSharedEvent(arg0: number): VkExportMetalSharedEventInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkExportMetalSharedEventInfoEXT;
    sType(): number;
    sType(arg0: number): VkExportMetalSharedEventInfoEXT;
    sType$Default(): VkExportMetalSharedEventInfoEXT;
    semaphore(): number;
    semaphore(arg0: number): VkExportMetalSharedEventInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkExportMetalSharedEventInfoEXT;
    set(arg0: VkExportMetalSharedEventInfoEXT): VkExportMetalSharedEventInfoEXT;
    sizeof(): number;
}