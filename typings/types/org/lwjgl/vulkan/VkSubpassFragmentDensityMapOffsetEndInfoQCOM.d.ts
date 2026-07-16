import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkRenderPassFragmentDensityMapOffsetEndInfoEXT } from '../../../org/lwjgl/vulkan/VkRenderPassFragmentDensityMapOffsetEndInfoEXT.d.ts'
export class VkSubpassFragmentDensityMapOffsetEndInfoQCOM extends VkRenderPassFragmentDensityMapOffsetEndInfoEXT {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FRAGMENTDENSITYOFFSETCOUNT: number;
    static PFRAGMENTDENSITYOFFSETS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkRenderPassFragmentDensityMapOffsetEndInfoEXT;
    static calloc(paramarg0: MemoryStack): VkRenderPassFragmentDensityMapOffsetEndInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkSubpassFragmentDensityMapOffsetEndInfoQCOM;
    static calloc(paramarg0: MemoryStack): VkSubpassFragmentDensityMapOffsetEndInfoQCOM;
    static create(): VkRenderPassFragmentDensityMapOffsetEndInfoEXT;
    static create(paramarg0: number): VkRenderPassFragmentDensityMapOffsetEndInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkSubpassFragmentDensityMapOffsetEndInfoQCOM;
    static create(paramarg0: number): VkSubpassFragmentDensityMapOffsetEndInfoQCOM;
    static createSafe(paramarg0: number): VkRenderPassFragmentDensityMapOffsetEndInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSubpassFragmentDensityMapOffsetEndInfoQCOM;
    static malloc(): VkRenderPassFragmentDensityMapOffsetEndInfoEXT;
    static malloc(paramarg0: MemoryStack): VkRenderPassFragmentDensityMapOffsetEndInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkSubpassFragmentDensityMapOffsetEndInfoQCOM;
    static malloc(paramarg0: MemoryStack): VkSubpassFragmentDensityMapOffsetEndInfoQCOM;
    static nfragmentDensityOffsetCount(paramarg0: number): number;
    static nfragmentDensityOffsetCount(paramarg0: number, paramarg1: number): void;
    static npFragmentDensityOffsets(paramarg0: number): (Object | null)[];
    static npFragmentDensityOffsets(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkSubpassFragmentDensityMapOffsetEndInfoQCOM;
    pFragmentDensityOffsets(): (Object | null)[];
    pFragmentDensityOffsets(arg0: (Object | null)[]): VkSubpassFragmentDensityMapOffsetEndInfoQCOM;
    pNext(): number;
    pNext(arg0: number): VkSubpassFragmentDensityMapOffsetEndInfoQCOM;
    sType(): number;
    sType(arg0: number): VkSubpassFragmentDensityMapOffsetEndInfoQCOM;
    sType$Default(): VkSubpassFragmentDensityMapOffsetEndInfoQCOM;
    set(arg0: number, arg1: number, arg2: (Object | null)[]): VkSubpassFragmentDensityMapOffsetEndInfoQCOM;
    set(arg0: VkRenderPassFragmentDensityMapOffsetEndInfoEXT): VkRenderPassFragmentDensityMapOffsetEndInfoEXT;
    set(arg0: VkSubpassFragmentDensityMapOffsetEndInfoQCOM): VkSubpassFragmentDensityMapOffsetEndInfoQCOM;
}