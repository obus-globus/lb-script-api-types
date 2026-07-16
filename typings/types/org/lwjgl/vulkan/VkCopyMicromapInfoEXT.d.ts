import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkCopyMicromapInfoEXT extends Struct<VkCopyMicromapInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DST: number;
    static MODE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRC: number;
    static STYPE: number;
    static calloc(): VkCopyMicromapInfoEXT;
    static calloc(paramarg0: MemoryStack): VkCopyMicromapInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCopyMicromapInfoEXT;
    static create(paramarg0: number): VkCopyMicromapInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCopyMicromapInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCopyMicromapInfoEXT;
    static malloc(paramarg0: MemoryStack): VkCopyMicromapInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndst(paramarg0: number): number;
    static ndst(paramarg0: number, paramarg1: number): void;
    static nmode(paramarg0: number): number;
    static nmode(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsrc(paramarg0: number): number;
    static nsrc(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkCopyMicromapInfoEXT;
    dst(): number;
    dst(arg0: number): VkCopyMicromapInfoEXT;
    mode(): number;
    mode(arg0: number): VkCopyMicromapInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkCopyMicromapInfoEXT;
    sType(): number;
    sType(arg0: number): VkCopyMicromapInfoEXT;
    sType$Default(): VkCopyMicromapInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkCopyMicromapInfoEXT;
    set(arg0: VkCopyMicromapInfoEXT): VkCopyMicromapInfoEXT;
    sizeof(): number;
    src(): number;
    src(arg0: number): VkCopyMicromapInfoEXT;
}