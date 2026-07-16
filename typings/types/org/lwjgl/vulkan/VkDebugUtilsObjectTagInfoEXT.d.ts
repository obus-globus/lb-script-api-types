import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDebugUtilsObjectTagInfoEXT extends Struct<VkDebugUtilsObjectTagInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static OBJECTHANDLE: number;
    static OBJECTTYPE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PTAG: number;
    static SIZEOF: number;
    static STYPE: number;
    static TAGNAME: number;
    static TAGSIZE: number;
    static calloc(): VkDebugUtilsObjectTagInfoEXT;
    static calloc(paramarg0: MemoryStack): VkDebugUtilsObjectTagInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDebugUtilsObjectTagInfoEXT;
    static create(paramarg0: number): VkDebugUtilsObjectTagInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDebugUtilsObjectTagInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDebugUtilsObjectTagInfoEXT;
    static malloc(paramarg0: MemoryStack): VkDebugUtilsObjectTagInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nobjectHandle(paramarg0: number): number;
    static nobjectHandle(paramarg0: number, paramarg1: number): void;
    static nobjectType(paramarg0: number): number;
    static nobjectType(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npTag(paramarg0: number): ByteBuffer;
    static npTag(paramarg0: number, paramarg1: ByteBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntagName(paramarg0: number): number;
    static ntagName(paramarg0: number, paramarg1: number): void;
    static ntagSize(paramarg0: number): number;
    static ntagSize(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDebugUtilsObjectTagInfoEXT;
    objectHandle(): number;
    objectHandle(arg0: number): VkDebugUtilsObjectTagInfoEXT;
    objectType(): number;
    objectType(arg0: number): VkDebugUtilsObjectTagInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkDebugUtilsObjectTagInfoEXT;
    pTag(): ByteBuffer;
    pTag(arg0: ByteBuffer): VkDebugUtilsObjectTagInfoEXT;
    sType(): number;
    sType(arg0: number): VkDebugUtilsObjectTagInfoEXT;
    sType$Default(): VkDebugUtilsObjectTagInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: ByteBuffer): VkDebugUtilsObjectTagInfoEXT;
    set(arg0: VkDebugUtilsObjectTagInfoEXT): VkDebugUtilsObjectTagInfoEXT;
    sizeof(): number;
    tagName(): number;
    tagName(arg0: number): VkDebugUtilsObjectTagInfoEXT;
    tagSize(): number;
}