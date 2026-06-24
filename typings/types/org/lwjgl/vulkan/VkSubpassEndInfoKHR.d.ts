import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkRenderPassFragmentDensityMapOffsetEndInfoEXT } from '../../../org/lwjgl/vulkan/VkRenderPassFragmentDensityMapOffsetEndInfoEXT.d.ts'
import type { VkSubpassEndInfo } from '../../../org/lwjgl/vulkan/VkSubpassEndInfo.d.ts'
import type { VkSubpassFragmentDensityMapOffsetEndInfoQCOM } from '../../../org/lwjgl/vulkan/VkSubpassFragmentDensityMapOffsetEndInfoQCOM.d.ts'
export class VkSubpassEndInfoKHR extends VkSubpassEndInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkSubpassEndInfo;
    static calloc(paramarg0: MemoryStack): VkSubpassEndInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkSubpassEndInfoKHR;
    static calloc(paramarg0: MemoryStack): VkSubpassEndInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSubpassEndInfo;
    static create(paramarg0: number): VkSubpassEndInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkSubpassEndInfoKHR;
    static create(paramarg0: number): VkSubpassEndInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSubpassEndInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSubpassEndInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSubpassEndInfo;
    static malloc(paramarg0: MemoryStack): VkSubpassEndInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkSubpassEndInfoKHR;
    static malloc(paramarg0: MemoryStack): VkSubpassEndInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkSubpassEndInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkSubpassEndInfoKHR;
    pNext(arg0: VkRenderPassFragmentDensityMapOffsetEndInfoEXT): VkSubpassEndInfo;
    pNext(arg0: VkSubpassFragmentDensityMapOffsetEndInfoQCOM): VkSubpassEndInfo;
    sType(): number;
    sType(arg0: number): VkSubpassEndInfoKHR;
    sType$Default(): VkSubpassEndInfoKHR;
    set(arg0: number, arg1: number): VkSubpassEndInfoKHR;
    set(arg0: VkSubpassEndInfo): VkSubpassEndInfo;
    set(arg0: VkSubpassEndInfoKHR): VkSubpassEndInfoKHR;
}