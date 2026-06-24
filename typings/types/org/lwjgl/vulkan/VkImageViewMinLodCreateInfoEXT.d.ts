import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkImageViewMinLodCreateInfoEXT extends Struct<VkImageViewMinLodCreateInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MINLOD: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkImageViewMinLodCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkImageViewMinLodCreateInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImageViewMinLodCreateInfoEXT;
    static create(paramarg0: number): VkImageViewMinLodCreateInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageViewMinLodCreateInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImageViewMinLodCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkImageViewMinLodCreateInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nminLod(paramarg0: number): number;
    static nminLod(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkImageViewMinLodCreateInfoEXT;
    minLod(): number;
    minLod(arg0: number): VkImageViewMinLodCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkImageViewMinLodCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkImageViewMinLodCreateInfoEXT;
    sType$Default(): VkImageViewMinLodCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: number): VkImageViewMinLodCreateInfoEXT;
    set(arg0: VkImageViewMinLodCreateInfoEXT): VkImageViewMinLodCreateInfoEXT;
    sizeof(): number;
}