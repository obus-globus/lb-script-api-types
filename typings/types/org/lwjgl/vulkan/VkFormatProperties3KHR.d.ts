import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkFormatProperties3 } from '../../../org/lwjgl/vulkan/VkFormatProperties3.d.ts'
export class VkFormatProperties3KHR extends VkFormatProperties3 {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFFERFEATURES: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LINEARTILINGFEATURES: number;
    static OPTIMALTILINGFEATURES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkFormatProperties3;
    static calloc(paramarg0: MemoryStack): VkFormatProperties3;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkFormatProperties3KHR;
    static calloc(paramarg0: MemoryStack): VkFormatProperties3KHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkFormatProperties3;
    static create(paramarg0: number): VkFormatProperties3;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkFormatProperties3KHR;
    static create(paramarg0: number): VkFormatProperties3KHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkFormatProperties3;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkFormatProperties3KHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkFormatProperties3;
    static malloc(paramarg0: MemoryStack): VkFormatProperties3;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkFormatProperties3KHR;
    static malloc(paramarg0: MemoryStack): VkFormatProperties3KHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbufferFeatures(paramarg0: number): number;
    static nlinearTilingFeatures(paramarg0: number): number;
    static noptimalTilingFeatures(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkFormatProperties3KHR;
    pNext(): number;
    pNext(arg0: number): VkFormatProperties3KHR;
    sType(): number;
    sType(arg0: number): VkFormatProperties3KHR;
    sType$Default(): VkFormatProperties3KHR;
    set(arg0: number, arg1: number): VkFormatProperties3KHR;
    set(arg0: VkFormatProperties3): VkFormatProperties3;
    set(arg0: VkFormatProperties3KHR): VkFormatProperties3KHR;
}