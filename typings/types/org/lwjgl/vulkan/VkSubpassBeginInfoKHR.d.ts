import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkSubpassBeginInfo } from '../../../org/lwjgl/vulkan/VkSubpassBeginInfo.d.ts'
export class VkSubpassBeginInfoKHR extends VkSubpassBeginInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CONTENTS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkSubpassBeginInfo;
    static calloc(paramarg0: MemoryStack): VkSubpassBeginInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkSubpassBeginInfoKHR;
    static calloc(paramarg0: MemoryStack): VkSubpassBeginInfoKHR;
    static create(): VkSubpassBeginInfo;
    static create(paramarg0: number): VkSubpassBeginInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkSubpassBeginInfoKHR;
    static create(paramarg0: number): VkSubpassBeginInfoKHR;
    static createSafe(paramarg0: number): VkSubpassBeginInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSubpassBeginInfoKHR;
    static malloc(): VkSubpassBeginInfo;
    static malloc(paramarg0: MemoryStack): VkSubpassBeginInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkSubpassBeginInfoKHR;
    static malloc(paramarg0: MemoryStack): VkSubpassBeginInfoKHR;
    static ncontents(paramarg0: number): number;
    static ncontents(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    contents(): number;
    contents(arg0: number): VkSubpassBeginInfoKHR;
    create(arg0: number, arg1: ByteBuffer): VkSubpassBeginInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkSubpassBeginInfoKHR;
    sType(): number;
    sType(arg0: number): VkSubpassBeginInfoKHR;
    sType$Default(): VkSubpassBeginInfoKHR;
    set(arg0: number, arg1: number, arg2: number): VkSubpassBeginInfoKHR;
    set(arg0: VkSubpassBeginInfo): VkSubpassBeginInfo;
    set(arg0: VkSubpassBeginInfoKHR): VkSubpassBeginInfoKHR;
}