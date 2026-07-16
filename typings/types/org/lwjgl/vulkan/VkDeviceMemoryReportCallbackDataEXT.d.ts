import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDeviceMemoryReportCallbackDataEXT extends Struct<VkDeviceMemoryReportCallbackDataEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static HEAPINDEX: number;
    static MEMORYOBJECTID: number;
    static OBJECTHANDLE: number;
    static OBJECTTYPE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static TYPE: number;
    static calloc(): VkDeviceMemoryReportCallbackDataEXT;
    static calloc(paramarg0: MemoryStack): VkDeviceMemoryReportCallbackDataEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDeviceMemoryReportCallbackDataEXT;
    static create(paramarg0: number): VkDeviceMemoryReportCallbackDataEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDeviceMemoryReportCallbackDataEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDeviceMemoryReportCallbackDataEXT;
    static malloc(paramarg0: MemoryStack): VkDeviceMemoryReportCallbackDataEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nheapIndex(paramarg0: number): number;
    static nmemoryObjectId(paramarg0: number): number;
    static nobjectHandle(paramarg0: number): number;
    static nobjectType(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsize(paramarg0: number): number;
    static ntype(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDeviceMemoryReportCallbackDataEXT;
    flags(): number;
    heapIndex(): number;
    memoryObjectId(): number;
    objectHandle(): number;
    objectType(): number;
    pNext(): number;
    pNext(arg0: number): VkDeviceMemoryReportCallbackDataEXT;
    sType(): number;
    sType(arg0: number): VkDeviceMemoryReportCallbackDataEXT;
    sType$Default(): VkDeviceMemoryReportCallbackDataEXT;
    set(arg0: number, arg1: number): VkDeviceMemoryReportCallbackDataEXT;
    set(arg0: VkDeviceMemoryReportCallbackDataEXT): VkDeviceMemoryReportCallbackDataEXT;
    size(): number;
    sizeof(): number;
    type(): number;
}