import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExportMetalObjectCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkExportMetalObjectCreateInfoEXT.d.ts'
import type { VkImportMetalSharedEventInfoEXT } from '../../../org/lwjgl/vulkan/VkImportMetalSharedEventInfoEXT.d.ts'
export class VkEventCreateInfo extends Struct<VkEventCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkEventCreateInfo;
    static calloc(paramarg0: MemoryStack): VkEventCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkEventCreateInfo;
    static create(paramarg0: number): VkEventCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkEventCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkEventCreateInfo;
    static malloc(paramarg0: MemoryStack): VkEventCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkEventCreateInfo;
    flags(): number;
    flags(arg0: number): VkEventCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkEventCreateInfo;
    pNext(arg0: VkExportMetalObjectCreateInfoEXT): VkEventCreateInfo;
    pNext(arg0: VkImportMetalSharedEventInfoEXT): VkEventCreateInfo;
    sType(): number;
    sType(arg0: number): VkEventCreateInfo;
    sType$Default(): VkEventCreateInfo;
    set(arg0: number, arg1: number, arg2: number): VkEventCreateInfo;
    set(arg0: VkEventCreateInfo): VkEventCreateInfo;
    sizeof(): number;
}