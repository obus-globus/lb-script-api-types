import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDebugUtilsObjectNameInfoEXT extends Struct<VkDebugUtilsObjectNameInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static OBJECTHANDLE: number;
    static OBJECTTYPE: number;
    static PNEXT: number;
    static POBJECTNAME: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDebugUtilsObjectNameInfoEXT;
    static calloc(paramarg0: MemoryStack): VkDebugUtilsObjectNameInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDebugUtilsObjectNameInfoEXT;
    static create(paramarg0: number): VkDebugUtilsObjectNameInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDebugUtilsObjectNameInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDebugUtilsObjectNameInfoEXT;
    static malloc(paramarg0: MemoryStack): VkDebugUtilsObjectNameInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nobjectHandle(paramarg0: number): number;
    static nobjectHandle(paramarg0: number, paramarg1: number): void;
    static nobjectType(paramarg0: number): number;
    static nobjectType(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npObjectName(paramarg0: number): ByteBuffer;
    static npObjectName(paramarg0: number, paramarg1: ByteBuffer): void;
    static npObjectNameString(paramarg0: number): string;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDebugUtilsObjectNameInfoEXT;
    objectHandle(): number;
    objectHandle(arg0: number): VkDebugUtilsObjectNameInfoEXT;
    objectType(): number;
    objectType(arg0: number): VkDebugUtilsObjectNameInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkDebugUtilsObjectNameInfoEXT;
    pObjectName(): ByteBuffer;
    pObjectName(arg0: ByteBuffer): VkDebugUtilsObjectNameInfoEXT;
    pObjectNameString(): string;
    sType(): number;
    sType(arg0: number): VkDebugUtilsObjectNameInfoEXT;
    sType$Default(): VkDebugUtilsObjectNameInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ByteBuffer): VkDebugUtilsObjectNameInfoEXT;
    set(arg0: VkDebugUtilsObjectNameInfoEXT): VkDebugUtilsObjectNameInfoEXT;
    sizeof(): number;
}